/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    return {
        configurations: await (await fetch(url + "/api/")).json() || {configurations: []}
    };
}
