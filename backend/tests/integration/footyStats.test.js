const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando integração com API FootyStats', () => {
  it('Deve buscar dados da API FootyStats e armazenar no banco de dados', async () => {
    const res = await request(app).get('/api/footystats');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('teams');
    expect(res.body).toHaveProperty('players');
  });
});
