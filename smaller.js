// function solution(A) {
//   let small = 1;
//   let sorted = A.sort((small, big) => small - big);

//   let positive = sorted.filter((x) => x > 0);

//   for (let index = 0; index < positive.length; index++) {
//     if (positive.includes(small)) {
//       small++;
//     } else {
//       break;
//     }
//   }
//   return small;
//   // write your code in JavaScript (Node.js 8.9.4)
// }

function solution(A) {
  let small = 1;
  let sorted = A.sort((small, big) => small - big);

  let positive = sorted.filter((x) => x > 0);

  for (let index = 0; index < positive.length; index++) {
    if (small < positive[index]) {
      break;
    }
    if (positive[index] != positive[index + 1]) {
      small++;
    }
  }
  return small;
  // write your code in JavaScript (Node.js 8.9.4)
}
A = [1, 3, 6, 4, 1, 2];
console.log(solution(A));
