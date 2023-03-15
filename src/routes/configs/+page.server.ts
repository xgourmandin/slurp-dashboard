import { sendRequest } from "$lib/server/api_call.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    const response = await sendRequest(url+"/api");
    return {
        configurations: response.json || {configurations: []}
    };
}
