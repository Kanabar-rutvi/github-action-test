const fs = require("fs");

fs.readFile("data.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  const obj = JSON.parse(data);

  console.log("JavaScript Object:");
  console.log(obj);
});
