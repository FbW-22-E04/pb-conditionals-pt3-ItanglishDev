const teamAlizaScoreOne = 89;
const teamAlizaScoreTwo = 120;
const teamAlizaScoreThree = 103;
const teamLisScoreOne = 116;
const teamLisScoreTwo = 94;
const teamLisScoreThree = 123;

const averageAliza =
  (teamAlizaScoreOne + teamAlizaScoreThree + teamAlizaScoreTwo) / 3;
const averageLisa = (teamLisScoreOne + teamLisScoreTwo + teamLisScoreThree) / 3;

if (averageAliza > averageLisa) {
  console.log(
    "The winner is Team Aleeza with " + averageAliza + " average points"
  );
} else if (averageAliza < averageLisa) {
  console.log(
    "The winner is Team Lisa with " + averageLisa + " average points"
  );
} else {
  console.log("They draw! Everybody is a winner");
}

const teamMaryScoreOne = 97;
const teamMaryScoreTwo = 134;
const teamMaryScoreThree = 105;

const averageMary =
  (teamMaryScoreOne + teamMaryScoreThree + teamMaryScoreTwo) / 3;

switch (true) {
  case averageAliza === averageLisa && averageMary === averageLisa:
    console.log("They draw! Everybody is a winner");
    break;
  case averageAliza > averageLisa && averageAliza > averageMary:
    console.log(
      "The winner is Team Aleeza with " + averageAliza + " average points"
    );
    break;
  case averageLisa > averageAliza && averageLisa > averageMary:
    console.log(
      "The winner is Team Lisa with " + averageLisa + " average points"
    );
    break;
  default:
    console.log(
      "The winner is Mary Lisa with " + averageMary + " average points"
    );
}
