function diagonale(A) {
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = A.length - 1; j > 0; j--) {
      const tmp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = tmp;
    }
  }
  return A;
}

let A = [
  [9, 6],
  [5, 4],
];

console.log(diagonale(A));
