const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const animais = data.species.find((e) => e.name === animal.species);
  if (Object.keys(animal).includes('sex')) {
    return animais.residents.filter((el) => el.sex === animal.sex).length;
  }
  return animais.residents.length;
};

// const res = data.species.map((e) => e.residents);

module.exports = countAnimals;
