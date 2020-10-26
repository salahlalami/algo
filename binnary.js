function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0;
  let binnary = N.toString(2);
  let gap = [];
  let a = [...binnary];
  let found = 0;
  gap[found] = 0;
  let i = 0;

  while (i < a.length) {
    if (a[i] === "1") {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] === "0" && j != a.length - 1) {
          gap[found] += 1;

          i = j;
          if (j === a.length - 2 && a[a.length - 1] != "1") {
            gap[found] = 0;
            break;
          }
        }
        if (a[j] === "1") {
          if (gap[found] > 0 && j != a.length - 1) {
            found++;
            gap[found] = 0;
          }
          //   i = j; give error
          break;
        }
      }
    }
    i++;
  }
  result = gap.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return result;
}

console.log(solution(1049));

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
