function solution(T) {
  var totalHours = T / 3600 || 0;
  var hours = Math.floor(totalHours);
  var totalMinutes = T / 60 || 0;
  var minutes = Math.floor(totalMinutes) % 60;
  var seconds = T % 60 || 0;
  return hours + "h" + minutes + "m" + seconds + "s";
}

function modulus(T, M) {
  return T % M;
}

const t = modulus(0, 5);
const s = solution(59);
console.log(s);
console.log(t);
