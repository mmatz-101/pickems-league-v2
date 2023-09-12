import { error } from '@sveltejs/kit';

export const actions = {
	removeFinal: async ({ locals }) => {
		try {
			const games = await locals.pb.collection('games').getFullList();
			let gamesArray = structuredClone(games);
			console.log('Length of picks gamesArray', gamesArray.length);

			for (const game of gamesArray) {
				game.status = 'No Data';
				console.log(game);
				const record = await locals.pb.collection('games').update(game.id, game);
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
