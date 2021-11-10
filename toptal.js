function solution(M, P) {
  let result = [0, 0, 0, 0, 0, 4];
  const mon = M * 100;
  const cus = P * 100;

  let rest = mon - cus;

  while (rest > 0) {
    if (rest >= 100) {
      const n = Math.trunc(rest / 100);
      result[5] = n;
      rest = rest % 100;
    } else if (rest >= 50) {
      const n = Math.trunc(rest / 50);
      result[4] = n;
      rest = rest % 50;
    } else if (rest >= 25) {
      const n = Math.trunc(rest / 25);
      result[3] = n;
      rest = rest % 25;
    } else if (rest >= 10) {
      const n = Math.trunc(rest / 10);
      result[2] = n;
      rest = rest % 10;
    } else if (rest >= 5) {
      const n = Math.trunc(rest / 5);
      result[1] = n;
      rest = rest % 5;
    } else if (rest >= 1) {
      const n = Math.trunc(rest / 1);
      result[0] = rest;
      rest = rest % 1;
    }
  }

  return result;
}

console.log(solution(3, 0.01));
