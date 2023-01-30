const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const pegaId = data.employees.find((e) => e.id === id);
  const pegaPrimeiro = pegaId.responsibleFor[0];
  const pegaOldest = data.species.find((e) => e.id === pegaPrimeiro).residents.sort((a, b) => a.age - b.age);
  return Object.values(pegaOldest[pegaOldest.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
