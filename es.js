let A = [3, 0, 2, 1, 6, -5, 4, 0, -9, 2, 1, -6, 3, -4, 5, 7, 8];
console.log(A);
let unique = [...new Set(A)];
let positive = A.filter((x) => x >= 0);
let negative = A.filter((x) => x < 0);

function neverDuplicated(A) {
  let result = [];
  let B = clone(A);
  for (let i = 0; i < A.length; i++) {
    if (typeof B[i] != "number") {
      continue;
    }
    let find = false;
    for (let j = i + 1; j < A.length; j++) {
      if (typeof B[j] != "number") {
        continue;
      }
      if (B[i] === B[j]) {
        find = true;
        B[j] = null;
      }
    }
    if (find === false && !result.includes(B[i])) result.push(B[i]);
  }
  return result;
}

let removeDuplicated = A.filter(
  (uniqueValue, index) => A.indexOf(uniqueValue) === index
);

let getDuplicated = A.filter(
  (duplicatedValue, index) => A.indexOf(duplicatedValue) !== index
);

let sorted = unique.sort((small, big) => big - small);

let sortedStB = unique.sort((small, big) => small - big);
