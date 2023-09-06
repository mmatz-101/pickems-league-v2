import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.model.admin) {
        throw error(401, "unathorized")
    }
}

export const actions = {
    createGame: async ({ locals, request }) => {
        const formData = await request.formData();
        const league = formData.get('league').toLowerCase();
        const year = formData.get("year");
        const weekExt = formData.get("ext");
        const week = formData.get("week");
        const urlString = `https://www.oddsshark.com/api/scores/football/${league}/${year}/${weekExt}`
        console.log(urlString)

        const response = await fetch(urlString);
        const gameData = await response.json();
        for (const game in gameData["scores"]) {
            let data = {
                "id": 0,
                "date": "",
                "stadium": "",
                "status": "",
                "home_spread": 0,
                "away_spread": 0,
                "home_score": 0,
                "away_score": 0,
                "home_abbreviation": "",
                "home_display_name": "",
                "home_name": "",
                "home_nick_name": "",
                "home_short_name": "",
                "away_abbreviation": "",
                "away_display_name": "",
                "away_name": "",
                "away_nick_name": "",
                "away_short_name": "",
                "tv_station_name": "",
                "league": league.toUpperCase(),
                "week": week
            }
            // meta information
            const metaGameData = gameData["scores"][game]
            data.id = String(metaGameData.id).padStart(15, "0")
            data.date = new Date(metaGameData.date * 1000)
            data.stadium = metaGameData["stadium"].stadium
            data.status = metaGameData.status
            data.tv_station_name = metaGameData.tvStationName
            data.home_spread = metaGameData["teams"]["home"].spread
            data.away_spread = metaGameData["teams"]["away"].spread
            data.home_score = metaGameData["teams"]["home"].score
            data.away_score = metaGameData["teams"]["away"].score
            data.week_ext_form = weekExt
            // home team information
            const homeTeam = gameData["scores"][game]["teams"]["home"]["names"]
            data.home_abbreviation = homeTeam.abbreviation
            data.home_display_name = homeTeam.display_name
            data.home_name = homeTeam.name
            data.home_nick_name = homeTeam.nick_name
            data.home_short_name = homeTeam.short_name
            // away team information
            const awayTeam = gameData["scores"][game]["teams"]["away"]["names"]
            data.away_abbreviation = awayTeam.abbreviation
            data.away_display_name = awayTeam.display_name
            data.away_name = awayTeam.name
            data.away_nick_name = awayTeam.nick_name
            data.away_short_name = awayTeam.short_name

            if (data.status === "FINAL") {
                const outcome = determineOutcome(data.home_score, data.away_score, data.home_spread)
                data.pick_winner = outcome
            }

            try {
                await locals.pb.collection('games').create(data);
            } catch (err) {
                try {
                    console.log("Attempting to update record")
                    const recordID = data.id
                    delete data.id
                    console.log(recordID, data)
                    await locals.pb.collection('games').update(recordID, data)
                } catch (err) {
                    console.log("Error: ", err)
                }
                console.log("Error: ", err)
            }
        }
    }
}

function determineOutcome(homeScore, awayScore, homeSpread) {
    const homeMargin = homeScore - awayScore;
    const spreadDifference = Math.abs(homeSpread);

    if (homeMargin > spreadDifference) {
        return 'HOME';
    } else if (homeMargin === spreadDifference) {
        return 'PUSH';
    } else {
        return 'AWAY';
    }
}