function solution(A) {
  if (A === undefined || A.length == 0) {
    return 1;
  }
  if (A.length === 1) {
    return 1;
  }
  A.sort((small, big) => small - big).filter((x) => typeof x === "number");
  for (let i = 0; i < A.length; i++) {
    if (typeof A[i] != "number") {
      continue;
    }

    if (A[i] != i + 1) {
      return i + 1;
    }
  }
  return 1;
}
