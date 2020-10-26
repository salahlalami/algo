function vector(A) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (typeof A[i][j] != "number") {
        continue;
      }
      result.push(A[i][j]);
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
      if (typeof A[i] != "undefined") C.push(A[i]);
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

let B = vector(A);
console.log(B);
let sorted = B.sort((s, b) => b - s);

console.log(sorted);
console.log(matrice(sorted, 2));
// console.log(compare(5, 2));
