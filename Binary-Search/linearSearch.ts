// Linear Search
import { sortedArray } from "./main.ts";

// linear search, O(n!)
export function linearSearch(arr: string[], target: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

if (import.meta.main) {
  console.log(linearSearch(sortedArray, "fml"));
}
