const data = require('../data/zoo_data');

const noOptionsGiven = (locArr) => {
  const finalObj = {};
  locArr.forEach((loc) => {
    finalObj[loc] = data.species.filter((specie) => specie.location === loc)
      .map((selectedSpecies) => selectedSpecies.name);
  });
  return finalObj;
};

// const namesIncluded = (locArr) => {
//   const objectToReturn = {};
//   locArr.forEach((loc) => {
//     objectToReturn[loc] = data.species.filter((species) => species.location === loc)
//       .map((selectedSpecies) => ({ listinha: selectedSpecies.residents.map((resident) => resident.name) }));
//   });
//   return objectToReturn;
// };

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  const locationsArr = ['NE', 'NW', 'SE', 'SW'];
  if (!includeNames) {
    return noOptionsGiven(locationsArr);
  }
//   if (!sex && !sorted) {
//     return namesIncluded(locationsArr);
//   }
}

module.exports = getAnimalMap;
