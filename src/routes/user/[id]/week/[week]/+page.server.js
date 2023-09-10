export async function load({ locals, params }) {
    const gamesNFL = await locals.pb.collection('games').getFullList({
        filter: `week="${params.week}" && league="NFL"`
        // sort: '-date'
    });

    const gamesNCAA = await locals.pb.collection('games').getFullList({
        filter: `week="${params.week}" && league="NCAAF"`
    });

    const picks = await locals.pb.collection("picks").getFullList({
        filter: `week="${params.week}" && user="${locals.pb.authStore.model.id}"`,
        expand: "gameID"
    })

    let gamesNFLArray = structuredClone(gamesNFL)
    let gamesNCAAArray = structuredClone(gamesNCAA)
    let picksArray = structuredClone(picks)


    return {
        week: params.week,
        success: true,
        gamesNFL: gamesNFLArray,
        gamesNCAA: gamesNCAAArray,
        picks: picksArray
    }
}


export const actions = {
    reviewPicks: async (event) => {
        const body = await event.request.formData()
        console.log(body)
        console.log("test")
        // console.log(event)
    }
}