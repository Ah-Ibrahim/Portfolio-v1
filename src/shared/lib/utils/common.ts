export function getNumeratedIndex(index: number): string {
  return ("-" + String(index + 1)).padStart(4, "0");
}
