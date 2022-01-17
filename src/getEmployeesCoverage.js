const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const getSpecies = (responsibleFor) => (
  data.species.filter(({ id }) =>
    responsibleFor.includes(id)).map(({ name }) => name)
);

const getLocations = (responsibleFor) => (
  data.species.filter(({ id }) =>
    responsibleFor.includes(id)).map(({ location }) => location)
);

const getInformations = (id, firstName, lastName, responsibleFor) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpecies(responsibleFor),
  locations: getLocations(responsibleFor),
});

const getEmployee = (name, idToCompare) => {
  const employeeFound = employees
    .find(({ firstName: forename, lastName: surname, id: employeeID }) => (
      forename === name || surname === name || employeeID === idToCompare
    ));

  if (!employeeFound) throw new Error('Informações inválidas');

  const { id, firstName, lastName, responsibleFor } = employeeFound;

  return getInformations(id, firstName, lastName, responsibleFor);
};

const allEmployees = () => (
  employees.reduce((accumulator, { id, firstName, lastName, responsibleFor }) => {
    let acc = accumulator;
    acc = [...acc, getInformations(id, firstName, lastName, responsibleFor)];
    return acc;
  }, [])
);

const getEmployeesCoverage = (info = 0) => {
  if (!info) return allEmployees();
  const { name, id } = info;
  return getEmployee(name, id);
};

module.exports = getEmployeesCoverage;
