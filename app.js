console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return (plusNumber) => {
    return plusNumber + number;
  };
}
let plusFifteen = plus(15);
console.log(plusFifteen(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const namesAndScores = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(namesAndScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const activeNames = users.filter((user) => {
  return user.isActive;
});
console.log(activeNames);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const scoresDesc = users.sort((user1, user2) => {
  return user2.score - user1.score;
});
console.log(scoresDesc);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let sumScore = users.reduce((sum, user) => {
  return sum + user.score;
}, 0);
console.log(sumScore);
console.log(sumScore / users.length)
