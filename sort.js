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

function boucle(A) {
  let i = 0;
  let indexMin = i;
  let min = A[i];
  let result = [];
  while (i < A.length) {
    if (min > A[i + 1]) {
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
    if (A.length === 0) {
      break;
    }
  }
  return result;
}
function sortWhile(A) {
  let i = 1;
  let indexMin = 0;
  let min = A[0];
  let result = [];
  while (i <= A.length) {
    if (min > A[i]) {
      min = A[i];
      indexMin = i;
    }
    if (i === A.length - 1) {
      result.push(min);
      A.splice(indexMin, 1);
      console.log(A);
      min = A[0];
      i = 1;
      if (A.length === 1) {
        result.push(A[0]);
        A.splice(0, 1);
        break;
      }
    } else {
      i++;
    }
  }
  return result;
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
console.log([].length);
console.log(boucle(unique(A)));
// console.log(A);

// console.log(A);
