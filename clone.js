const nums = [[1, [3, 3]], [10]];

const cloneNums = Array.from(nums);
let newArr = [];
for (let i = 0; i < nums.length; i++) {
  newArr.push(nums[i]);
}
let arrayCopy = JSON.parse(JSON.stringify(nums));
const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));

const clonedArray = clone(cloneNums);
// Let's change the first item in the first nested item in our cloned array.
clonedArray[0][0] = "👻";

console.log(clonedArray);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

// NOOooo, the original is also affected
console.log(nums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]
