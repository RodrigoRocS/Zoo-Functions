const data = require('../data/zoo_data');

const pegaLocal = (callback, options) => {
  const pegaLocalNE = data.species
    .filter((e) => e.location === 'NE')
    .map((el) => el.name).map((especie) => callback(especie, options));
  const pegaLocalNW = data.species
    .filter((e) => e.location === 'NW')
    .map((el) => el.name).map((especie) => callback(especie, options));
  const pegaLocalSE = data.species
    .filter((e) => e.location === 'SE')
    .map((el) => el.name).map((especie) => callback(especie, options));
  const pegaLocalSW = data.species
    .filter((e) => e.location === 'SW')
    .map((el) => el.name).map((especie) => callback(especie, options));
  return { NE: pegaLocalNE, NW: pegaLocalNW, SE: pegaLocalSE, SW: pegaLocalSW };
};

// const residentEspecie = (especie) => {
//   const pegaEspecie = data.species.find((e) => e.name === especie).residents;
//   return { [especie]: pegaEspecie.map((e) => e.name) };
// };

const residentEspecieSexSort = (especie, options) => {
  const pegaEspecie = data.species.find((e) => e.name === especie).residents;
  if (options.sex && options.sorted) {
    return { [especie]: pegaEspecie.filter((e) => e.sex === options.sex)
      .map((e) => e.name).sort() };
  }
  if (options.sex) {
    return { [especie]: pegaEspecie.filter((e) => e.sex === options.sex).map((e) => e.name) };
  }
  if (options.sorted) {
    return { [especie]: pegaEspecie.map((e) => e.name).sort() };
  }
  return { [especie]: pegaEspecie.map((e) => e.name) };
};

const getAnimalMap = (options) => {
  if (!options) {
    return pegaLocal((e) => e); // teste 1
  }
  const { includeNames } = options;
  if (!includeNames) {
    return pegaLocal((e) => e); // teste 2 e 3
  }
  return pegaLocal(residentEspecieSexSort, options); // teste 4
};

module.exports = getAnimalMap;
