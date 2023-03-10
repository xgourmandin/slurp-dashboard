
export function formDataToJson(formData: any): any {
    const transformed = {};
    for (let [key, value] of Object.entries(formData)) {
        if (value === 'none') {
            continue;
        }
        if (value === "true" || value === "false") {
            value = value === "true";
        }
        if (key.includes(".")) {
            const tokens = key.split(".");
            if (!transformed[tokens[0]]) {
                transformed[tokens[0]] = {};
            }
            transformed[tokens[0]][tokens[1]] = value;
        }
        else{
            transformed[key] = value;
        }
    }
    return transformed;
}