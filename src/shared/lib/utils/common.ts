export function getNumeratedIndex(index: number): string {
  return ("-" + String(index + 1)).padStart(4, "0");
}

export function getNonNullElements(elements: (Element | null)[]) {
  return elements.filter((el): el is Element => Boolean(el));
}
