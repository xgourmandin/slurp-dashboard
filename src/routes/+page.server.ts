/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    console.log(url);
    return {
        history: await (await fetch(url + "/history/")).json() || {history: []}
    };
}
