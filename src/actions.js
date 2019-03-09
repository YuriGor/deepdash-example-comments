export const FILTER_SET = "FILTER_SET";

export function setFilter(path, value) {
  return { type: FILTER_SET, path, value };
}
