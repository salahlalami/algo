const myArray = [
  { id: "0", items: [] },
  {
    id: "1",
    items: [
      {
        id: "1.0",
        items: [
          { id: "1.0.0", items: [] },
          { id: "1.0.1", items: [] },
        ],
      },
      { id: "1.1", items: [] },
    ],
  },
];

function deepRemove(array, indicesArr) {
  const last = indicesArr.pop();
  const finalItems = indicesArr.reduce((acc, i) => acc[i].items, array);
  finalItems.splice(last, 1);
  return array;
}

function deepSplice(array, indicesArr, ...toBeInserted) {
  const last = indicesArr.pop();
  const finalItems = indicesArr.reduce((acc, i) => acc[i].items, array);
  finalItems.splice(last, 1, ...toBeInserted);
  return array;
}
const arr = deepSplice(myArray, [1, 0, 1], { id: "newID", items: [] });
console.log(JSON.stringify(arr));

// console.log(
//   // removes "1.0.1" item and inserts a new object there
//   deepRemove(myArray, [1, 0, 1], 1)
// );
