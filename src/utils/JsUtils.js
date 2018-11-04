export function isUndefinedOrEmpty(array) {
  return !Array.isArray(array) || !array.length;
}
