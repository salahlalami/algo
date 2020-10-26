function solution(A) {
  const sum = (array, i, j) => {
    let sum = 0;
    for (let index = i; index <= j; index++) {
      sum = sum + array[index];
    }
    return sum;
  };

  if (A === undefined || A.length <= 1) {
    return 1;
  }

  let result = [];
  for (let j = 1; j < A.length; j++) {
    const diffrence = sum(A, 0, j - 1) - sum(A, j, A.length - 1);
    result.push(Math.abs(diffrence));
  }

  return result.reduce((a, b) => Math.min(a, b));
}

A = [3, 1, 2, 4, 3];

console.log(solution(A));
