const fs = require("fs");
const inputData = require("./input1.json");

function canTransformNumber(num1, num2) {
  if (num1 === num2) {
    return true; // якщо числа рівні, перетворення не потрібно
  }
  if (num1 > num2) {
    return false;
  }

  let transformedNum = num2;
  while (num1 < transformedNum) {
    if (transformedNum % 10 === 1) {
      transformedNum = (transformedNum - 1) / 10;
      console.log("transformedNum", transformedNum);
    } else {
      if (transformedNum % 2 === 0) {
        transformedNum = transformedNum / 2;
        console.log("transformedNum", transformedNum);
      } else {
        return false;
      }
    }
    if (transformedNum === num1) {
      return true;
    }
    if (transformedNum < num1) {
      return false;
    }
  }
}

const outputData = {
  canTransform: canTransformNumber(inputData.startNumber, inputData.endNumber),
};

fs.writeFileSync("output1.json", JSON.stringify(outputData));
