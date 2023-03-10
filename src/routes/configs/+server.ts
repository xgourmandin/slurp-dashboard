import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({request, fetch}) {
    const { id, activate } = await request.json();
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    if (activate) {
        await fetch(url+"/api/"+id+"/unpause", {
            method: "POST"
        })
    }
    else {
        await fetch(url+"/api/"+id+"/pause", {
            method: "POST"
        })
    }
    return json({ok: true})
}