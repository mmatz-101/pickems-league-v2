
export async function load({ locals }) {

    return {
        userID: locals.pb.authStore.model.id
    }
}