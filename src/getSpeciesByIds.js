const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }
  return ids.map((e) => data.species.find((especie) => especie.id === e));
};

module.exports = getSpeciesByIds;
