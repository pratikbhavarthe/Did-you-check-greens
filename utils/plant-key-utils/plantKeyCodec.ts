export function encodePlantKey(plantKey: string): string {
  return encodeURI(plantKey).replace(/%20/g, "+");
}

export function decodePlantKey(plantKey: string): string {
  return decodeURI(plantKey.replace(/\+/g, "%20"));
}
