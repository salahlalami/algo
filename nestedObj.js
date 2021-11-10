var replace = (obj, newObj) => {
  for (const key in obj) {
    if (obj[key] !== null) {
      if (
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key]) &&
        obj[key] !== null
      ) {
        newObj[key] = sanitize(obj[key]);
      } else if (Array.isArray(obj[key])) {
        const arr = obj[key];
        newObj[key] = arr.filter((value) => {
          if (value === "N/A" || value === "" || value === "-") {
            return value;
          }
        });
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return {};
};

const sanitize = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === null || value === "N/A" ? undefined : value;
    })
  );
};
let obj = {
  name: { first: "Robert", last: "Smith" },
  age: 25,
  hobbies: ["running", "coding"],
  education: { college: "Yale" },
};

let newObj = {};
console.log("before", newObj);

console.log("after", sanitize(obj));

const https = require("https");

const sanitize = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === "N/A" || value === "" || value === "-"
        ? undefined
        : value;
    })
  );
};

var replace = (obj) => {
  let newObj = {};
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      newObj[key] = sanitize(obj[key]);
    } else if (Array.isArray(obj[key])) {
      const arr = obj[key];
      newObj[key] = arr.filter((value) => {
        if (value != "N/A" && value != "" && value != "-") {
          return value;
        }
      });
    } else {
      if (obj[key] != "N/A" && obj[key] != "" && obj[key] != "-") {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

https
  .get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      const obj = JSON.parse(data);

      let newData = replace(obj);
      // console.log(data);
      //   console.log("after");
      console.log(JSON.stringify(newData));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
