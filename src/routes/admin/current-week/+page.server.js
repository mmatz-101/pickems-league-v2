import { error } from '@sveltejs/kit';

export async function load({ locals }) {
    const records = await locals.pb.collection("current").getFullList()
    return {
        currentWeekDB: records[0].current_week
    }

}


export const actions = {
    updateCurrentWeek: async ({ locals, request }) => {
        try {
            const formData = await request.formData();
            const records = await locals.pb.collection("current").getFullList()
            const data = {
                id: records[0].id,
                current_week: formData.get("currentWeek")
            }
            await locals.pb.collection("current").update(data.id, data)
            return {
                success: true
            }
        } catch (err) {
            console.log(err)
            throw error(500, "Internal server error")
        }
    }
}