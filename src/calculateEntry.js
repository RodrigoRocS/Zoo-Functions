const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((e) => e.age < 18).length;
  const adult = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  const senior = entrants.filter((e) => e.age >= 50).length;

  return { adult, child, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Array.isArray(entrants) === false) {
    return 0;
  }
  return (countEntrants(entrants).child * data.prices.child)
   + (countEntrants(entrants).adult * data.prices.adult)
  + (countEntrants(entrants).senior * data.prices.senior);
};

module.exports = { calculateEntry, countEntrants };
