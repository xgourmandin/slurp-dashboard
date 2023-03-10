export function translateError(error): string {
    if (error.tag === "required") return "is required"
    if (error.tag === "oneof") return "value shall be one among "+error.value.split(" ").join(", ")
    if (error.tag === "url") return "URL is malformed"

}