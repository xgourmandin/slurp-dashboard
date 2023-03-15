import { sendRequest } from "$lib/server/api_call.js";
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    const response = await sendRequest(`${url}/history`)
    return {
        history: response.json || {history: []}
    };
}
