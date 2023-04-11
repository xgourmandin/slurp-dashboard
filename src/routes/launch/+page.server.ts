import { sendRequest } from "$lib/server/api_call.js";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  const response = await sendRequest(url + "/api");
  return {
    configurations: response.json || { configurations: [] }
  };
};


export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const name = formData["name"];
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
    sendRequest(`${url}/slurp/${name}`, "POST");
    throw redirect(302, "/");

  }
};