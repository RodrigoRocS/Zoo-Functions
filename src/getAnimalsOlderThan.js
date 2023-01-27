const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const achaAnimal = data.species.find((e) => e.name === animal).residents.every((e) =>
    e.age >= age);
  return achaAnimal;
};

module.exports = getAnimalsOlderThan;
