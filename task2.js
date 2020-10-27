function solution(S, K) {
  S = S.toUpperCase();
  S = [...S];

  let current = [];

  let i = 0;
  let n = 1;
  while (i < S.length) {
    let last = S[i];

    if (S[i + 1] != last || i === S.length - 1) {
      if (n > 1) {
        // const result = n + last;
        const result = { number: n, value: last };
        current.push(result);
      } else {
        const result = { number: n, value: last };
        current.push(result);
        // current.push(last);
      }
      n = 1;
    }
    if (S[i + 1] === last) {
      n++;
    }
    i++;
  }
  console.log(current);
  i = 0;
  while (i < current.length) {
    // console.log(current);
    if (i + 2 > current.length - 1 || i + 1 > current.length - 1) {
      break;
    }
    const currentObj = current[i];

    const closeObj = current[i + 1];

    const nextUpObj = current[i + 2];
    // console.log(nextUpObj);
    if (currentObj.value === nextUpObj.value) {
      console.log(currentObj.value + " === " + nextUpObj.value);
      const rest = 0;
      console.log(closeObj);
      if (closeObj.number === K) {
        console.log(closeObj.number + " === " + K);
        current.splice(i + 1, 1);
      } else if (closeObj.number <= K) {
        console.log(closeObj.number + " <= " + K);
        nextUpObj.number -= 1;
        current.splice(i + 1, 1);
      }
      currentObj.number = currentObj.number + closeObj.number;
      current.splice(i + 1, 1);
      break;
    }
    i++;
  }
  let nbr = 0;
  for (let index = 0; index < current.length; index++) {
    const currentObj = current[index];

    if (currentObj.number === 1) {
      nbr += 1;
    } else {
      nbr += 2;
    }
  }

  return nbr;
}

S = "AAAAAAAAAAABXXAAAAAAAAAA";

console.log(solution(S, 3));
