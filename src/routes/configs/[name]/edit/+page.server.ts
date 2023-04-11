import { redirect } from "@sveltejs/kit";
import { formDataToJson } from "$lib/server/form_utilities.js";
import { sendRequest } from "$lib/server/api_call.js";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
  const response = await sendRequest(`${url}/api/${params.name}`);
  return {
    configuration: response.json,
    formConfig: (await fetch("/config.json")).json()
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const transformed = formDataToJson(formData);
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
    const result = await sendRequest(`${url}/api`, "PUT", JSON.stringify(transformed));
    if (result.status == 200) {
      throw redirect(302, "/configs");
    } else {
      return {
        has_errors: true,
        formData: transformed,
        errors: result.json
      };
    }
  }
};