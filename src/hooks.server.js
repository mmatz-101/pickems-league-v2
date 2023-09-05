import PocketBase from 'pocketbase'

export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

    try {
        event.locals.pb.authStore.isValid && event.locals.pb.collection("users").authRefresh()
    } catch (err) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
        // todo figure out how to clear cookie because there is a chance that a user could sign in then change password
        console.log("Error: ", err)
    }

    const response = await resolve(event)

    // send back the default "pb_auth" cookie to the client with the latest store state
    response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response
}