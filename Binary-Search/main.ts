// Binary Search

// example array
export const theArray: string[]= [
  "Sam",
  "Starboy",
  "Tris",
  "Stargirl",
  "Life",
  "Universe",
  "&",
  "Whatever",
  "tf",
  "lies",
  "beyond...",
  "wtf, right?",
  "Origins",
  "Eternity",
  "The Beginning of the end",
  "Singularity",
  "FML",
  "Fuck",
  "Just",
  "Fuckin'",
  "Die",
  "Already",
  "...",
];

// sorted array
export const sortedArray: string[]= theArray
  .map((value) => value.toLowerCase())
  .sort();

/** lowercase + sort */
export function sortThis(arr: string[]) {
  return arr.map((value) => value.toLowerCase()).sort();
}

/** binary search algorithm */
export function binarySearch(arr: string[], target: string, start = 0, end = arr.length - 1) {
  // sortThis(arr); //for testing

  const pointerIndex: number = Math.floor((start + end) / 2);
  const indexValue: string = arr[pointerIndex];
  // console.log(start, end, pointerIndex, indexValue);

  // failed
  if (start > end) {
    // console.log("\n404 - not found!");
    return -1;
  }

  // found
  if (indexValue === target) {
    // console.log(`\n${target} found at '${pointerIndex}' :)\n`);
    return pointerIndex;
  }

  // overshoot
  if (indexValue > target) {
    return binarySearch(arr, target, start, pointerIndex - 1);
  }

  // undershoot
  if (indexValue < target) {
    return binarySearch(arr, target, pointerIndex + 1, end);
  }
}

if (import.meta.main) {
  console.log(binarySearch(sortedArray, "fml"));
  // console.log(theArray)
}
