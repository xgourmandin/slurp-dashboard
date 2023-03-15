import { json } from '@sveltejs/kit';
import { sendRequest } from "$lib/server/api_call.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const { id, activate } = await request.json();
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    if (activate) {
        await sendRequest(`${url}/api/${id}/unpause`, "POST")
    }
    else {
        await sendRequest(`${url}/api/${id}/pause`, "POST")
    }
    return json({ok: true})
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({request}) {
    const {name} = await request.json();
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    await sendRequest(`${url}/api/${name}`, "DELETE")
    return json({ok: true})
}