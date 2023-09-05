export async function load({ locals }) {
    const picks = await locals.pb.collection("picks").getFullList({
        filter: `user="${locals.pb.authStore.model.id}"`,
        sort: "+gameID.date",
        expand: "gameID"
    })
    let picksArray = structuredClone(picks)

    picksArray.forEach(pick => {
        updatePick(pick, locals)
    });

    return {
        picks: picksArray
    }
}

async function updatePick(pick, locals) {
    if (pick.expand.gameID.status === "FINAL") {
        if (pick.expand.gameID.pick_winner === "PUSH") {
            pick.results_points = .75
            pick.results_text = "PUSH"
            await locals.pb.collection("picks").update(pick.id, pick)
        }
        if (pick.team_selected.toUpperCase() === pick.expand.gameID.pick_winner) {
            pick.results_points = 1.5
            pick.results_text = "WIN"
            await locals.pb.collection("picks").update(pick.id, pick)
        } else {
            pick.results_text = "LOST"
        }
    }
}