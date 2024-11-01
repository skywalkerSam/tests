//Benchmarks

import { linearSearch } from "./linearSearch.ts";
import { binarySearch } from "./main.ts";

const numArray: number[] = Array.from({ length: 100000 }, (_, i) => i);

const randomStrings: string[] = Array.from({ length: 1000 }, () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const length = Math.floor(Math.random() * 10) + 1;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}).sort();

Deno.bench({
  name: "Binary Search",
  baseline: true,
  fn: () => {
    binarySearch(randomStrings, "hope");
  },
});

Deno.bench({
  name: "Linear Search",
  // baseline: true,
  fn: () => {
    linearSearch(randomStrings, "hope");
  },
});

if (import.meta.main) {
  // console.log(randomStrings)
  console.log(binarySearch(randomStrings, "hope"));
  console.log(linearSearch(randomStrings, "hope"));
}
