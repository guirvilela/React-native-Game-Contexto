export function isEqual(a: any, b: any): boolean {
  if (!a || !b) return false;
  return Object.keys(a).every(key => a[key] === b[key]);
}
