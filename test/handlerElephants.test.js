const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se "handlerElephants" é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se "handlerElephants" retorna 4 com o argumento "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se "handlerElephants" retorna [ "Ilana", "Orval", "Bea", "Jefferson"] com o argumento "names" ', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se "handlerElephants" retorna 10.5 se passado argumento "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se "handlerElephants" retorna "NW" se passado argumento "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se "handlerElephants" retorna 5 se passado argumento "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se "handlerElephants" retorna undefined se não passado nenhum argumento', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Verifica se "handlerElephants" retorna "Parâmetro inválido, é necessário uma string" se o argumento não for uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se "handlerElephants" retorna null se o parâmetro não for válido', () => {
    expect(handlerElephants('bebe')).toBe(null);
  });
  it('Verifica se "handlerElephants" retorna [ "Friday", "Saturday", "Sunday", "Tuesday"] com o argumento "availability" ', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
