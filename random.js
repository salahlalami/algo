function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
