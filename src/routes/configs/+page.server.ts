import { sendRequest } from "$lib/server/api_call.js";
import type { PageServerLoad } from "./$types";

/** @type {import("./$types").PageServerLoad} */
export const load: PageServerLoad = async () => {
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  const response = await sendRequest(url + "/api");
  return {
    configurations: response.json || { configurations: [] }
  };
};
