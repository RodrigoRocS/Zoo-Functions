const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((e) => e.managers.some((el) => el === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const pegaManager = data.employees.filter((e) => e.managers.find((el) => el === managerId));
    return pegaManager.map((e) => `${e.firstName} ${e.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
