const getOpeningHours = require('../src/getOpeningHours');

const funcionamento = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
const dayError = 'The day must be valid. Example: Monday';
const fechado = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função esta definida', () => {
    expect(getOpeningHours()).toBeDefined();
  });
  it('Verifica se a função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica se a função getOpeningHours ao não receber parametro retorna "funcionamento"', () => {
    expect(getOpeningHours()).toEqual(funcionamento);
  });
  it('Verifica se a função getOpeningHours ao receber um dia errado retorna um erro', () => {
    expect(() => { getOpeningHours('monda'); }).toThrow(dayError);
  });
  it('Verifica se a função getOpeningHours ao receber um periodo errado retorna um erro', () => {
    expect(() => { getOpeningHours('Monday', '11:00-AR'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se a função getOpeningHours ao receber um minuto errado retorna um erro', () => {
    expect(() => { getOpeningHours('Monday', '09:0G-AM'); }).toThrow('The minutes should represent a number');
  });
  it('Verifica se a função getOpeningHours ao receber um horario errado retorna um erro', () => {
    expect(() => { getOpeningHours('Monday', 'I9:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('Verifica se a função getOpeningHours ao receber um horario maior que 12 retorna um erro', () => {
    expect(() => { getOpeningHours('Monday', '19:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se a função getOpeningHours ao receber um minuto maior que 59 retorna um erro', () => {
    expect(() => { getOpeningHours('Monday', '10:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica se a função getOpeningHours ao receber "Wednesday, 10:00-AM" informa que esta aberto', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se a função getOpeningHours ao receber "Wednesday, 06:00-AM" informa que esta fechado', () => {
    expect(getOpeningHours('Wednesday', '06:00-AM')).toBe(fechado);
  });
  it('Verifica se a função getOpeningHours ao receber "Wednesday, 06:00-PM" informa que esta fechado', () => {
    expect(getOpeningHours('Wednesday', '06:00-PM')).toBe(fechado);
  });
  it('Verifica se a função getOpeningHours ao receber "Monday, 09:00-AM" informa que esta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(fechado);
  });
});
