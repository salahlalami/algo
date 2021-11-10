function solution(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] + 1 < array[index + 1]) {
      result.push("" + array[index]);
      result.push(array[index] + 1 + "->" + (array[index + 1] - 1));
    } else {
      result.push("" + array[index]);
    }
  }
  return result;
}

const A = [1, 2, 5, 6, 10, 12, 13, 14];
console.log(solution(A));
