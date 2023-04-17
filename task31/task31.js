const fs = require("fs");
const currentRecordJSON = require("./input31.json");
// const arr = [0.5, 1, 2.5, 4.54, 5, 10, 11.35, 15, 15.89, 20, 20.43, 25];
const kgWeights = currentRecordJSON.kg; // weights in kg
const lbsWeigths = currentRecordJSON.lbs; // weights in lbs
const barWeight = 20; // weight of the bar in kg
const kgDiscs = [0.5, 1, 2.5, 5, 10, 15, 20, 25];
const lbsDiscs = [10, 25, 35, 45];

const currentRecordDiscsInKg = [...lbsWeigths.map((num) => num * 0.454), ...kgWeights];

console.log('currentRecordDiscsInKg', currentRecordDiscsInKg);

const allDiscInKg = [...lbsDiscs.map((disc) => disc * 0.454), ...kgDiscs].sort(
  function (a, b) {
    return a - b;
  }
);
const currentRecordInKg = currentRecordDiscsInKg.reduce((a, b) => a + b) * 2 + barWeight;
console.log('currentRecordInKg', currentRecordInKg)

const min =  currentRecordDiscsInKg.reduce((a, b) => a + b); // weight all discs on one side without weight of bar

const max = 121.5; // real current world record in Clean & Jerk 263 kg (121.5*2+20=263)

let arrGetSumCombinations = []

function getSumCombinations(numbers, target, partial = [], start = 0) {
  let sum = partial.reduce((a, b) => a + b, 0);

  if (sum > max || partial.length > 4) return;

  if (sum > min && sum <= max) {
    arrGetSumCombinations.push(partial)
  }

  for (let i = start; i < numbers.length; i++) {
    const num = numbers[i];
    getSumCombinations(numbers, target, [...partial, num], i + 1);
  }
}

getSumCombinations(allDiscInKg, max);

let minWeight = 500;
let minDiscs = []
for ( i = 0; i < arrGetSumCombinations.length; i++) {
  let currentWeight = arrGetSumCombinations[i].reduce((a, b) => a + b)
  if ( currentWeight < minWeight) {
    minDiscs = arrGetSumCombinations[i];
    minWeight = currentWeight
  }
}

let nextMinWeight = minWeight * 2 + barWeight

const outputData = {
  nextMinWeight: nextMinWeight,
  nextSetOfDiscs: minDiscs
};
console.log('nextSetOfDiscs', minDiscs)
console.log('nextMinWeightInKg', nextMinWeight)
fs.writeFileSync("output31.json", JSON.stringify(outputData));
