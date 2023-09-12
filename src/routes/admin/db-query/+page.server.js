import { error } from '@sveltejs/kit';

export const actions = {
	removeFinal: async ({ locals }) => {
		try {
			const games = await locals.pb.collection('games').getFullList();
			let gamesArray = structuredClone(games);
			console.log("Length of picks gamesArray", gamesArray.length)
			console.log(gamesArray)

			await updatePicks(gamesArray);


			return {
				success: true
			};
		} catch (err) {
			console.log(err);
			throw error(500, 'internal server error');
		}
	}
};

async function updatePicks(gamesArray) {
	for (const game in gamesArray) {
		console.log(game)
		game.status = 'No Data';
		console.log(game)
		const record = await locals.pb.collection('games').update(game.id, game);
	}
}
