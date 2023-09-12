import { error } from '@sveltejs/kit';

export const actions = {
    removeFinal: async ({ locals }) => {
        try {

            const picks = await locals.pb.collection("games").getFullList()
            let picksArray = structuredClone(picks)

            picksArray.forEach(pick => {
                pick.status = "No Data"
            });

            return {
                success: true
            }
        } catch (err) {
            console.log(err)
            throw error(500, "internal server error")
        }
    }
}