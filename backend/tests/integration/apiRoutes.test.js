const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de API', () => {
  it('Deve buscar dados da API FootyStats', async () => {
    const res = await request(app).get('/api/footystats');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Deve buscar dados da API Highlightly', async () => {
    const res = await request(app).get('/api/highlightly');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});
