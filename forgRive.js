function solution(X, A) {
  if (A === undefined || A.length == 0) {
    return -1;
  }

  if (typeof X != "number" || X < 1) {
    return -1;
  }
  let result = -1;

  result = A.indexOf(X);
  return result;
}
A = [1, 3, 5, 4, 2, 3, 5, 4];

console.log(solution(7, A));
