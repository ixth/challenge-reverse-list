import { arrayToList, listToArray } from "./list";
import { reverse } from "./index";

const array = [1, null, 3];

const list = {
  value: 1,
  next: {
    value: null,
    next: {
      value: 3,
      next: null
    }
  }
};

const reverseList = {
  value: 3,
  next: {
    value: null,
    next: {
      value: 1,
      next: null
    }
  }
};

test("arrayToList", () => {
  expect(arrayToList(array)).toEqual(list);
  expect(arrayToList([])).toEqual(null);
});

test("listToArray", () => {
  expect(listToArray(list)).toEqual(array);
  expect(listToArray(null)).toEqual([]);
});

test("reverse", () => {
  expect(reverse(list)).toEqual(reverseList);
  expect(reverse(null)).toEqual(null);
});
