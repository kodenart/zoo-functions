const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpeciesId = employees.filter((employee) => employee.id === id)[0]
    .responsibleFor[0];
  const residentsFromId = species.filter((specie) => specie.id === firstSpeciesId)[0].residents;
  residentsFromId.sort((residentA, residentB) => residentB.age - residentA.age);
  return [residentsFromId[0].name, residentsFromId[0].sex, residentsFromId[0].age];
}

console.log(getOldestFromFirstSpecies(employees[0].id));

module.exports = getOldestFromFirstSpecies;
