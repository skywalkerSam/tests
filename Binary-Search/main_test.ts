import { assertEquals } from "@std/assert";
import { sortedArray, binarySearch } from "./main.ts";

Deno.test(function binarySearchAlgorithm() {
  assertEquals(binarySearch(sortedArray, "fml"), 6);
});

Deno.test(function binarySearchAlgorithmNotFound() {
  assertEquals(binarySearch(sortedArray, "whotf"), -1);
});
