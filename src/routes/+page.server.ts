import { sendRequest } from "$lib/server/api_call.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  const response = await sendRequest(`${url}/history`);
  return {
    history: response.json || { history: [] }
  };
};
