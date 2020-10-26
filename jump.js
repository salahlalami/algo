function solution(X, Y, D) {
  if (X === undefined || Y === undefined || D === undefined) {
    return 0;
  }
  if (typeof X != "number" || typeof Y != "number" || typeof D != "number") {
    return 0;
  }
  if (X > Y || X < 1 || Y < 1 || D < 1) {
    return 0;
  }

  const Z = Y - X;
  let jump = Z / D;
  let result = jump;
  if (Z % D != 0) {
    result = Math.floor(jump) + 1;
  }
  return result;
}

console.log(solution(10, 110, 30));
