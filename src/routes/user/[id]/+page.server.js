export async function load({ locals }) {
    // regular picks
    const picks = await locals.pb.collection("picks").getFullList({
        filter: `user="${locals.pb.authStore.model.id}"`,
        sort: "+gameID.date",
        expand: "gameID"
    })
    let picksArray = structuredClone(picks)

    // binny buys
    const picksBinny = await locals.pb.collection("binny_picks").getFullList({
        filter: `user="${locals.pb.authStore.model.id}"`,
        sort: "+gameID.date",
        expand: "gameID"
    })
    let picksBinnyArray = structuredClone(picksBinny)

    for (const pick of picksArray) {
        await updatePick(pick, locals, "picks")
    }
    for (const pickBinny of picksBinnyArray) {
        await updateBinnyPick(pickBinny, locals, "binny_picks")
    }

    return {
        picks: picksArray,
        picksBinny: picksBinnyArray
    }
}

async function updatePick(pick, locals, collectioName) {
    if (pick.expand.gameID.status === "FINAL") {
        if (pick.expand.gameID.pick_winner === "PUSH") {
            pick.results_points = .75
            pick.results_text = "PUSH"
        } else if (pick.team_selected.toUpperCase() === pick.expand.gameID.pick_winner) {
            pick.results_points = 1.5
            pick.results_text = "WIN"
        } else {
            pick.results_text = "LOST"
        }
        await locals.pb.collection(collectioName).update(pick.id, pick)
    }
}

async function updateBinnyPick(pick, locals, collectioName) {
    if (pick.expand.gameID.status === "FINAL") {
        if (pick.expand.gameID.pick_winner === "PUSH") {
            pick.results_points = .75
            pick.results_text = "PUSH"
        } else if (pick.team_selected.toUpperCase() === pick.expand.gameID.pick_winner) {
            pick.results_points = 1
            pick.results_text = "WIN"
        } else {
            pick.results_points = -1
            pick.results_text = "LOST"
        }
        await locals.pb.collection(collectioName).update(pick.id, pick)
    }
}