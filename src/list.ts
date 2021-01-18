export type List<T = any> = {
  value: T;
  next: List<T>;
} | null;

export const arrayToList = <T = any>(array: Array<T>): List<T> =>
  array.reduceRight<List<T>>(
    (next: List<T>, value: T) => ({ value, next }),
    null
  );

export const listToArray = <T = any>(list: List<T>): Array<T> =>
  list !== null ? [list.value, ...listToArray(list.next)] : [];
