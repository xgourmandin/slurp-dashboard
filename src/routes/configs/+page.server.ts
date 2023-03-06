/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const url: string = process.env.SLURP_SERVUER_URL || "http://localhost:3000"
    return {
        configurations: (await fetch(url + "/api/")).json()
    };
}