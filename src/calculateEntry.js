const data = require('../data/zoo_data');

function countEntrants(entrants = []) {
  const finalObj = { child: 0, adult: 0, senior: 0 };
  finalObj.senior = entrants.filter((person) => person.age >= 50).length;
  finalObj.adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  finalObj.child = entrants.filter((person) => person.age < 18).length;
  return finalObj;
}

// const edpe = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(countEntrants(edpe));

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const countedEntries = countEntrants(entrants);
  const categoryArr = Object.keys(countedEntries);
  return categoryArr.reduce((acc, curr) => {
    if (curr === 'child') {
      return acc + countedEntries[curr] * data.prices.child;
    } if (curr === 'adult') {
      return acc + countedEntries[curr] * data.prices.adult;
    }
    return acc + countedEntries[curr] * data.prices.senior;
  }, 0);
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
