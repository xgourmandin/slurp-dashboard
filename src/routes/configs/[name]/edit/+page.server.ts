import {redirect} from "@sveltejs/kit";
import { formDataToJson } from '$lib/server/form_utilities.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, params}) {
    const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
    return {
        configuration: (await fetch(url + "/api/" + params.name)).json(),
        formConfig:  (await fetch("/config.json")).json()
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const formData = Object.fromEntries(await request.formData());
        const transformed = formDataToJson(formData);
        console.log(transformed);
        const url: string = process.env.SLURP_SERVER_URL || "http://localhost:3000"
        const result = await fetch(url+"/api", {
            method:"PUT",
            body: JSON.stringify(transformed),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (result.status == 200) {
            throw redirect(302, '/configs');
        } else {
            return {
                has_errors: true,
                formData: transformed,
                errors: await result.json()
            }
        }
    }
};