import { sendRequest } from "$lib/server/api_call.js";
import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load() {
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  const response = await sendRequest(url + "/api");
  return {
    configurations: response.json || { configurations: [] }
  };
}


/** @type {import("./$types").Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const name = formData["name"];
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
    sendRequest(`${url}/slurp/${name}`, "POST");
    throw redirect(302, "/");

  }
};