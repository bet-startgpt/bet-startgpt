const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de tips', () => {
  it('Deve buscar todos os tips', async () => {
    const res = await request(app).get('/api/tips');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Deve criar um novo tip', async () => {
    const newTip = { match: 'Time A vs Time B', prediction: 'Vitória Time A', odds: 2.5, source: 'FootyStats' };
    const res = await request(app).post('/api/tips').send(newTip);
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
});
