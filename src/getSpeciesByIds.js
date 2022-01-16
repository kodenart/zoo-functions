const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((inputId) => data.species.find((specie) => specie.id === inputId));
}

// console.log(getSpeciesByIds(data.species[0].id, data.species[1].id));

module.exports = getSpeciesByIds;
