// function boucle(A) {
//   let i = 0;
//   let indexMin = 1;
//   let min = A[0];
//   let result = [];

//   while (i < A.length) {
//     indexMin++;

//     console.log(A[i]);
//     if (i === A.length - 1) {
//       i = 0;
//     } else {
//       i++;
//     }
//     if (indexMin > 10) {
//       break;
//     }
//   }
//   return result;
// }

function sort(A) {
  let i = 0;
  let indexMin = i;
  let min = A[i];
  let result = [];
  while (A.length > 0) {
    if (A.length === 1) {
      result.push(A[0]);
      A.splice(0, 1);
      break;
    }
    if (min >= A[i + 1]) {
      min = A[i + 1];
      indexMin = i + 1;
    }

    if (i === A.length - 1) {
      result.push(min);
      A.splice(indexMin, 1);
      console.log(A);
      min = A[0];
      i = 0;
    } else {
      i++;
    }
  }
  //   result.push[A[0]];
  return result;
}
let A = [2, 1, 5, 4, 3];
console.log(sort(A));
console.log(A);
