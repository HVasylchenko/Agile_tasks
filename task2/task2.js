const fs = require("fs");
const inputArr = require("./input2.json");
console.log("inputArr", inputArr)

function findDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
      const index = Math.abs(arr[i]);
      if (arr[index] < 0) {
        return index;
      }
      arr[index] = -arr[index];
    }
  }


const outputElem = {duplicatedElem: findDuplicate(inputArr)}

console.log( 'outputElem', outputElem);

fs.writeFileSync("output2.json", JSON.stringify(outputElem));