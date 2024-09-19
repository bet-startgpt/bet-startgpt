const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de odds', () => {
  it('Deve buscar as odds de apostas', async () => {
    const res = await request(app).get('/api/odds');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
