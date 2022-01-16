const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((employee) => employee.managers
      .some((managerId) => managerId === id));
}
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

function getRelatedEmployees(managerId) {
  const error = new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  if (isManager(managerId)) {
    return data.employees
      // filtra os funcionarios que são gerentes
      .filter((employee) => employee.managers
        .some((curId) => curId === managerId))
      // após o array de objetos com os gerenciados retornar, mapeia para um array de str
      .map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw error;
}

console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
