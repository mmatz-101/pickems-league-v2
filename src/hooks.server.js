import {sequence} from "@sveltejs/kit/hooks";
import * as Sentry from "@sentry/sveltekit";
import PocketBase from 'pocketbase'

Sentry.init({
    dsn: "https://01537bb8639f840a3edbaaa4b9d8b6f9@o4505865232777216.ingest.sentry.io/4505865236578304",
    tracesSampleRate: 1
})

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(Sentry.sentryHandle(), async function _handle({ event, resolve }) {
    event.locals.pb = new PocketBase("https://pickems-league-db.fly.dev/");

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
});