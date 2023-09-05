import { redirect, error } from '@sveltejs/kit'

export const actions = {
    login: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())

        console.log(body)
        try {
            // authenticate as auth collection record
            const userData = await locals.pb.collection('users').authWithPassword(body.email, body.password);
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb?.authStore?.clear()
                return {
                    notVerified: true,
                };
            }
        } catch (err) {
            console.log("Error: ", err)
            throw error(500, "Something went wrong.")
        }

        throw redirect(303, `/user/${locals.pb.authStore.model.id}`)

    }
}