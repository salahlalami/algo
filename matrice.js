function vector(A) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (typeof A[i][j] != "number") {
        continue;
      }
      if (!result.includes(A[i][j])) result.push(A[i][j]);
    }
  }

  return result;
}

function matrice(A, l) {
  let result = [];
  let i = 0;
  while (i < A.length) {
    let C = [];
    for (let j = 0; j < l; j++) {
      C.push(A[i]);
      i++;
    }

    result.push(C);
    // i++;
  }

  return result;
}

let A = [
  [3, 0],
  [2, 5],
  [4, 5],
  [0, 9],
  [4, 1],
  [2, 6],
];
// console.log(sortUnique(A));
// console.log(negative(A));
// console.log(positive(A));
// console.log(duplicated(A));
// console.log();
let B = vector(A);
console.log(B);
console.log(matrice(B, 3));
