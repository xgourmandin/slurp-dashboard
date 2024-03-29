import { redirect } from "@sveltejs/kit";
import { formDataToJson } from "$lib/server/form_utilities.js";
import { sendRequest } from "$lib/server/api_call.js";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  return {
    formConfig: (await fetch("/config.json")).json()
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const transformed = formDataToJson(formData);
    console.log(transformed);
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000";
    const result = await sendRequest(`${url}/api`, "POST", JSON.stringify(transformed));
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