const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de estatísticas de times', () => {
  it('Deve buscar estatísticas de times', async () => {
    const res = await request(app)
      .get('/api/stats');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('teamName');
  });
});
