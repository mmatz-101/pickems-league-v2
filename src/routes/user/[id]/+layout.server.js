
/** @type {import('./$types').PageLoad} */
export async function load({ params, url, locals }) {
    let currentWeek = await locals.pb.collection('current').getFullList({})
    currentWeek = structuredClone(currentWeek)
    return {
        id: params.id,
        page: url.pathname,
        currentWeek: currentWeek[0].current_week
    }
}