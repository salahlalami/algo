const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));

function duplicated(A) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    // if (typeof A[i] != "number") {
    //   continue;
    // }
    let counter = 1;
    let find = false;
    for (let j = i + 1; j < A.length; j++) {
      // if (typeof A[j] != "number") {
      //   continue;
      // }
      if (A[i] === A[j]) {
        find = true;
        counter++;
      }
    }
    if (find === true && !result.includes(A[i]) && counter >= 3)
      result.push(A[i]);
  }
  return result;
}

function FirstNeverDuplicated(A) {
  let result = [];

  // clone(A)
  let tmp = null;
  for (let i = 0; i < A.length; i++) {
    tmp = A[i];
    for (let j = i + 1; j < A.length; j++) {
      if (tmp === A[j]) {
        tmp = null;
        break;
      } else {
        console.log(tmp + " === " + A[j]);
      }
    }
  }
  return tmp;
}

arr = ["a", "b", "a", "b", "a", "c", "c", "d", "z", "z", "z"];

function appears(arr) {
  const d = duplicated(arr);

  let barr = clone(arr);
  const n = FirstNeverDuplicated(barr);

  const result = [];

  result.push(d);
  result.push(n);

  return result;
}

console.log(appears(arr));
