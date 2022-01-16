const data = require('../data/zoo_data');

// função que vai retornar o objeto com todos animais...
const allAnimals = () => {
  const allAnimalsArr = {};
  data.species.forEach((currSpec) => {
    allAnimalsArr[currSpec.name] = currSpec.residents.length;
  });
  return allAnimalsArr;
};

const findBySpecies = (specie) => data.species.find((curValue) => curValue.name === specie);

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return findBySpecies(specie).residents.length;
  }
  return findBySpecies(specie).residents
    .filter((resident) => resident.sex === sex)
    .length;
}

// console.log(countAnimals({ specie: 'frogs', sex: 'female' }));

module.exports = countAnimals;
