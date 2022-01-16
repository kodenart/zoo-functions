const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const returnedEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  // separei para ficar mais legível o que está acontecendo, ficou um pouco confuso quando na mesma linha
  return returnedEmployee === undefined ? {} : returnedEmployee;
}

// console.log(getEmployeeByName('EdPe'));

module.exports = getEmployeeByName;
