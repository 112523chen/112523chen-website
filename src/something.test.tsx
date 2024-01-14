const add = (a: number, b: number) => a + b;

import { expect, test } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});
