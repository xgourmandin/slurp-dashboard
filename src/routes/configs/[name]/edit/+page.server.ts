/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const url: string = process.env.SLURP_SERVUER_URL || "http://localhost:3000"
    return {
        configuration: (await fetch(url + "/api/" + params.name)).json()
    };
}