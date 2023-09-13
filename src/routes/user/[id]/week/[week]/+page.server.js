export async function load({ locals, params }) {
    const gamesNFL = await locals.pb.collection('games').getFullList({
        filter: `week="${params.week}" && league="NFL"`
        // sort: '-date'
    });

    const gamesNCAA = await locals.pb.collection('games').getFullList({
        filter: `week="${params.week}" && league="NCAAF"`
    });

    const picks = await locals.pb.collection("picks").getFullList({
        filter: `week="${params.week}" && user="${locals.pb.authStore.model.id}"`,
        expand: "gameID"
    })

    let gamesNFLArray = structuredClone(gamesNFL)
    let gamesNCAAArray = structuredClone(gamesNCAA)
    let picksArray = structuredClone(picks)

    // Determined the selected games before rendering the components.
    for (const pick of picksArray) {
        const pickId = pick.expand.gameID.id;
        let pickSelected = ''
        if (pick.team_selected === "home") {
            pickSelected = 'home'
        }
        // Check if the pick ID matches any ID in gamesNFLArray
        const matchedNFLGameIndex = gamesNFLArray.findIndex(game => game.id === pickId);

        // Check if the pick ID matches any ID in gamesNCAAArray
        const matchedNCAAGameIndex = gamesNCAAArray.findIndex(game => game.id === pickId);

        // If a match is found in either array, set 'selected' to true
        if (matchedNFLGameIndex !== -1) {
            gamesNFLArray[matchedNFLGameIndex].selected = true;
            if (pickSelected === "home") {
                gamesNFLArray[matchedNFLGameIndex].homeTeamSelected = true;
            } else {
                gamesNFLArray[matchedNFLGameIndex].awayTeamSelected = true;
            }
        }
        if (matchedNCAAGameIndex !== -1) {
            gamesNCAAArray[matchedNCAAGameIndex].selected = true;
            if (pickSelected === "home") {
                gamesNCAAArray[matchedNCAAGameIndex].homeTeamSelected = true;
            } else {
                gamesNCAAArray[matchedNCAAGameIndex].awayTeamSelected = true;
            }
        }
    }

    return {
        week: params.week,
        success: true,
        gamesNFL: gamesNFLArray,
        gamesNCAA: gamesNCAAArray,
        picks: picksArray
    }
}


export const actions = {
    reviewPicks: async (event) => {
        const body = await event.request.formData()
        console.log(body)
        console.log("test")
        // console.log(event)
    }
}