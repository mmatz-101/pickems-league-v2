import { error, redirect } from '@sveltejs/kit';

export const actions = {
    submitPicks: async ({ locals, request, params }) => {
        const body = Object.fromEntries(await request.formData())


        try {
            const resultArray = [];
            for (let i = 0; body[`id_${i}`] !== undefined; i++) {
                const teamName = body[`id_${i}`];
                const teamSpread = body[`team_selected_${i}`];

                resultArray.push({ id: teamName, team_selected: teamSpread });
            }

            // Get the previous list of picks
            const prevPicks = await locals.pb.collection("picks").getFullList({
                filter: `user="${locals.pb.authStore.model.id}" && week=${params.week}`
            })

            // loop through the previous list of picks and delete them
            for (const prevPick of prevPicks) {
                await locals.pb.collection('picks').delete(prevPick.id);
            }

            // loop through the new picks 
            for (const newPick of resultArray) {
                let data = {
                    "user": locals.pb.authStore.model.id,
                    "week": params.week,
                    "gameID": newPick.id,
                    "team_selected": newPick.team_selected
                };

                const record = await locals.pb.collection('picks').create(data);
                console.log("Created: ", record)
            }
        } catch (err) {
            console.log(err)
            throw error(500, err)
        }


        throw redirect(303, `/user/${locals.pb.authStore.model.id}`)

    }
}