function solution(A) {
  if (A === undefined || A.length == 0) {
    return 0;
  }

  for (let i = 0; i < A.length; i++) {
    if (typeof A[i] != "number") {
      continue;
    }
    let find = false;
    for (let j = i + 1; j < A.length; j++) {
      if (typeof A[j] != "number") {
        continue;
      }
      if (A[i] === A[j]) {
        find = true;
        A[j] = null;
      }
    }
    if (find === false) return A[i];
  }
}
function s(A) {
  let result = 0;

  for (let element of A) {
    // Apply Bitwise XOR to the current and next element
    result ^= element;
  }

  return result;
}
A = [9, 3, 9, 3, 9, 7, 9];

console.log(s(A));
