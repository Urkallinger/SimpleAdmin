export function isUndefinedOrEmpty(array: Array<any>) {
  return !Array.isArray(array) || !array.length;
}
