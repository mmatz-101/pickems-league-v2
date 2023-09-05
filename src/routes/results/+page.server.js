
export async function load({ locals }) {
    const records = await locals.pb.collection("results").getFullList({
        expand: "user"
    })

    let resultData = structuredClone(records)
    for (const result of resultData) {
        result.userName = result.expand.user.name
    }
    return {
        resultData: resultData
    }
}