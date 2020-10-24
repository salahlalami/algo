// function sort(A) {
//   let B = A;
//   for (let i = 0; i < B.length; i++) {
//     for (let j = i + 1; j < B.length; j++) {
//       if (B[i] >= B[j]) {
//         const tmp = B[j];
//         B[j] = B[i];
//         B[i] = tmp;
//       }
//     }
//   }
//   return B;
// }

const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));

function sort(A) {
  let B = clone(A);
  // B = unique(B);
  for (let i = 0; i < B.length; i++) {
    for (let j = i + 1; j < B.length; j++) {
      if (B[i] >= B[j]) {
        const tmp = B[j];
        B[j] = B[i];
        B[i] = tmp;
      }
    }
  }
  return B;
}
function unique(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (typeof A[i] == "undefined") {
      continue;
    }
    let find = false;
    for (let j = i + 1; j < A.length; j++) {
      if (typeof A[j] == "undefined") {
        continue;
      }
      if (A[i] === A[j]) {
        find = true;
      }
      if (find) break;
    }
    if (find === false && !result.includes(A[i])) result.push(A[i]);
  }
  return result;
}

// function positive(A) {
//   let result = [];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] >= 0 && typeof A[i] === "number") {
//       result.push(A[i]);
//     }
//   }
//   return result;
// }

// const negative = (A) => {
//   let result = [];
//   A.map((x) => {
//     if (x < 0 && typeof x === "number") {
//       result.push(x);
//     }
//   });
//   return result;
// };
function duplicated(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (typeof A[i] == "undefined") {
      continue;
    }
    let find = false;
    for (let j = i + 1; j < A.length; j++) {
      if (typeof A[j] == "undefined") {
        continue;
      }
      if (A[i] === A[j]) {
        find = true;
      }
      if (find) break;
    }
    if (find === true && !result.includes(A[i])) result.push(A[i]);
  }
  return result;
}
let A = [
  ,
  ,
  0,
  3,
  -2,
  1,
  9,
  "👻",
  ,
  2,
  -18,
  ,
  ,
  "👻",
  3,
  0,
  -4,
  ,
  "👻",
  1,
  ,
  -2,
  3,
  ,
  ,
  6,
  4,
  ,
  ,
];
// console.log(sortUnique(A));
// console.log(negative(A));
// console.log(positive(A));
console.log(duplicated(A));
// console.log(
//   A.reduce(function (array, currentValue) {

//     if (array.includes(currentValue)) return result.push(currentValue);
//   }, 0)
// );
console.log(sort(duplicated(A)));
console.log(unique(A));
console.log(sort(unique(A)));
// console.log(A);

// console.log(A);
