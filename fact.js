solution = (A) => {
  let result = 1;
  for (let i = 1; i <= A; i++) {
    result = result * i;
  }

  return result;
};

// function recursive(number) {
//   return number > 1 ? number * recursive(number - 1) : 1;
// }

const fact = (x) => {
  if (x === 1) return 1;
  return x * fact(x - 1);
};

function recursive(number) {
  let result = 1;
  if (number > 1) {
    result = number * recursive(number - 1);
  }
  return result;
}
// console.log(sortUnique(A));
console.log(recursive(5));
console.log(fact(5));
console.log(solution(5));
