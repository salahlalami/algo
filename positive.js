function positive(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0 && typeof A[i] === "number") {
      result.push(A[i]);
    }
  }
  return result;
}

const negative = (A) => {
  let result = [];
  A.map((x) => {
    if (x < 0 && typeof x === "number") {
      result.push(x);
    }
  });
  return result;
};

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

console.log(negative(A));

console.log(positive(A));
console.log(A.filter((x) => x >= 0));
console.log(A);
