const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando limite de requisições de API', () => {
  it('Deve verificar se o uso de API está dentro do limite', async () => {
    const res = await request(app).get('/api/api-limits/check/FootyStats');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Dentro do limite de requisições');
  });

  it('Deve alertar se o limite de API foi atingido', async () => {
    const res = await request(app).get('/api/api-limits/check/OddsAPI');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toBe('Limite de requisições atingido');
  });
});
