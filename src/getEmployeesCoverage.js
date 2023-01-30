const data = require('../data/zoo_data');

const pegaTodos = () => data.employees.map((e) => {
  const pegaNomeAni = e.responsibleFor.map((el) =>
    data.species.find((ele) => ele.id === el).name);
  const pegaLoc = e.responsibleFor.map((el) =>
    data.species.find((ele) => ele.id === el).location);
  return { id: e.id,
    fullName: `${e.firstName} ${e.lastName}`,
    species: pegaNomeAni,
    locations: pegaLoc,
  };
});

const getEmployeesCoverage = (param) => {
  if (!param) {
    return pegaTodos();
  }
  const pegaNome = data.employees.find((e) =>
    e.firstName === param.name || e.lastName === param.name || e.id === param.id);
  if (pegaNome) {
    const pegaNomeAni = pegaNome.responsibleFor.map((e) =>
      data.species.find((el) => el.id === e).name);
    const pegaLoc = pegaNome.responsibleFor.map((e) =>
      data.species.find((el) => el.id === e).location);
    return {
      id: pegaNome.id,
      fullName: `${pegaNome.firstName} ${pegaNome.lastName}`,
      species: pegaNomeAni,
      locations: pegaLoc,
    };
  } throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
