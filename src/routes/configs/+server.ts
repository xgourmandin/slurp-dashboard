import { json } from "@sveltejs/kit";
import { sendRequest } from "$lib/server/api_call.js";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { id, activate } = await request.json();
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  if (activate) {
    await sendRequest(`${url}/api/${id}/unpause`, "POST");
  } else {
    await sendRequest(`${url}/api/${id}/pause`, "POST");
  }
  return json({ ok: true });
};

export const DELETE: RequestHandler = async ({ request }) => {
  const { name } = await request.json();
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  await sendRequest(`${url}/api/${name}`, "DELETE");
  return json({ ok: true });
};