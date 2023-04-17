const fs = require("fs");
const inputData = require("./input32.json");
const tShirts = inputData.tShirts;
const participants = inputData.participants

let participantsResult = [];

function enoughTShirt(tShirts, participants) {
  for (i = 0; i < participants.length; i++) {
    if (participants[i].length === 1) {
      if (tShirts[participants[i][0]] >= 1) {
        tShirts[participants[i][0]]--;
        participantsResult[i] = participants[i][0];
      } else {
        participantsResult = [];
        return false;
      }
    }
  }

  for (i = 0; i < participants.length; i++) {
    if (participants[i].length === 2) {
      if (tShirts[participants[i][0]] >= 1) {
        tShirts[participants[i][0]]--;
        participantsResult[i] = participants[i][0];
      } else {
        if (tShirts[participants[i][1]] >= 1) {
          tShirts[participants[i][1]]--;
          participantsResult[i] = participants[i][1];
        } else {
          participantsResult = [];
          return false;
        }
      }
    }
  }
  return true;
}

const outputData = {
 enoughTShirt: enoughTShirt(tShirts, participants),
setTShirt: participantsResult
};

console.log(outputData);

fs.writeFileSync("output32.json", JSON.stringify(outputData));

