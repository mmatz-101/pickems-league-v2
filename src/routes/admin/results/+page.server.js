import { error } from '@sveltejs/kit';

export const actions = {
	updatePicks: async ({ locals }) => {
		try {
			// get the current week
    		const records = await locals.pb.collection("current").getFullList()
        	const currentWeek =  records[0].current_week

			// only filter picks that are in the currentWeek
			const picks = await locals.pb.collection('picks').getFullList({
				filter: `week=${currentWeek}`,
				expand: 'gameID'
			});
			let picksArray = structuredClone(picks);
			console.log(picksArray.length)

			for (const pick of picksArray) {
				await updatePick(pick, locals);
				console.log(pick);
			}

			return {
				success: true
			};
		} catch (err) {
			console.log(err);
			throw error(500, 'internal server error');
		}
	}
};

async function updatePick(pick, locals) {
	console.log(pick.expand.gameID);
	// If a game is complete then updating the Points and Text associated with that information.
	if (pick.expand.gameID.status === 'FINAL') {
		if (pick.expand.gameID.pick_winner === 'PUSH') {
			pick.results_points = 0.75;
			pick.results_text = 'PUSH';
		}
		else if (pick.team_selected.toUpperCase() === pick.expand.gameID.pick_winner) {
			pick.results_points = 1.5;
			pick.results_text = 'WIN';
		} else {
			pick.results_points = 0;
			pick.results_text = 'LOST';
		}
		await locals.pb.collection('picks').update(pick.id, pick);
	}
	// Did you the user pick the favorite or the underdog.
	if ((pick.fav_or_under != 'FAV') & (pick.fav_or_under != 'UND')) {
		if (pick.team_selected === 'home') {
			if (pick.expand.gameID.home_spread < 0) {
				pick.fav_or_under = 'FAV';
			} else {
				pick.fav_or_under = 'UND';
			}
		} else {
			if (pick.expand.gameID.away_spread < 0) {
				pick.fav_or_under = 'FAV';
			} else {
				pick.fav_or_under = 'UND';
			}
		}
		await locals.pb.collection('picks').update(pick.id, pick);
	}
}
