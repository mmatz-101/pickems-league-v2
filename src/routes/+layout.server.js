export const load = ({ locals }) => {
    if (locals.user) {
        console.log("User: ", locals.users)
        return {
            user: locals.users
        }
    }

    return {
        user: undefined
    }
}