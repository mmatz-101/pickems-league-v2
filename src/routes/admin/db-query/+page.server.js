import { error } from '@sveltejs/kit';

export const actions = {
	removeFinal: async ({ locals }) => {
		try {
			const picks = await locals.pb.collection('games').getFullList();
			let picksArray = structuredClone(picks);

			updatePicks(picksArray);

			return {
				success: true
			};
		} catch (err) {
			console.log(err);
			throw error(500, 'internal server error');
		}
	}
};

async function updatePicks(picksArray) {
	for (const pick in picksArray) {
		pick.status = 'No Data';
		const record = await locals.pb.collection('games').update(pick.id, pick);
	}
}
