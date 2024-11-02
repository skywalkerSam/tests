// Fisher Yates shuffle algorithm implementation w/ TypeScript

export const theArray: string[] = [
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

// let fisherCalled: boolean = true;
export function fisherYates(arr: string[]) {
  const shuffledArr: string[] = [];
  const min: number = 0;
  let max: number = arr.length;
  let randomIndex: number = 0;
  for (max >= min; max--; ) {
    randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    shuffledArr.push(arr[randomIndex]);
    arr.splice(randomIndex, 1); // duplicates
    // console.log(min, max, randomIndex);
    // console.log(theArray, shuffledArray);
  }
  // console.log(shuffledArr)
  return shuffledArr;
}

if (import.meta.main) {
  console.log(fisherYates(theArray));
}
