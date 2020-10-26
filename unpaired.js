// function solution(A) {
//   if (A === undefined || A.length == 0) {
//     return 0;
//   }
//   let result = [];
//   for (let i = 0; i < A.length; i++) {
//     if (typeof A[i] != "number") {
//       continue;
//     }
//     let find = false;
//     for (let j = i + 1; j < A.length; j++) {
//       if (typeof A[j] != "number") {
//         continue;
//       }
//       if (A[i] === A[j]) {
//         find = true;
//         A[j] = null;
//       }
//     }
//     if (find === false) result.push(A[i]);
//   }
//   if (result.length == 0) {
//     return 0;
//   }
//   return result[0];
// }

// function solution(A) {
//   const n = A.filter((uniqueValue, index) => A.indexOf(uniqueValue) === index);
//   return n;
// }

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

A = [9, 3, 9, 3, 9, 7, 9];

console.log(solution(A));
