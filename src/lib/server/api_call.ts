import { GoogleAuth } from "google-auth-library";
import type { GaxiosOptions } from "gaxios/build/src/common";

const auth = new GoogleAuth();

export async function sendRequest(url: string, method: GaxiosOptions["method"] = "GET", body?: any) {
  console.log("Process deploy target is : ", process.env.DEPLOY_TARGET);
  if (process.env.DEPLOY_TARGET === "cloudrun") {
    const targetAudience = String(process.env.SLURP_SERVER_URL);
    console.info(`request ${url} with target audience ${targetAudience}`);
    const client = await auth.getIdTokenClient(targetAudience);
    let result;
    if (method === "GET") {
      result = await client.request({ url: url, method: method });
    } else {
      result = await client.request({ url: url, method: method, body: body });
    }
    return { status: result.status, json: result.data };
  } else {
    let req: Promise<Response>;
    if (method === "GET") {
      req = fetch(url, {
        method: method,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
    } else {
      req = fetch(url, {
        method: method,
        body: body,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
    }
    return req.then(async response => {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return { status: response.status, json: await response.json() };
      } else {
        return { status: response.status, json: await response.text() };
      }
    }).catch(err => {
      console.log(err);
      return { status: 500, json: [] };
    });
  }

}