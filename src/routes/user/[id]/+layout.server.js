
/** @type {import('./$types').PageLoad} */
export function load({ params, url }) {
    return {
        id: params.id,
        page: url.pathname
    }
}