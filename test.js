let o = "c";
let v = 10;
let r = [];
// o["a"] = (o["a"] || 0) + 1;

r[0] = { [o]: v };
console.log(r);

// Returns undefined, as only declaration was hoisted, no initialization has happened at th
