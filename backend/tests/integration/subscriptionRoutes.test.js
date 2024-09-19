const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de assinaturas', () => {
  it('Deve criar uma nova assinatura', async () => {
    const res = await request(app).post('/api/subscriptions/create').send({
      userId: '6123abcd4567ef1234567890',
      plan: 'VIP',
    });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Assinatura criada com sucesso');
  });

  it('Deve verificar o status de uma assinatura', async () => {
    const res = await request(app).get('/api/subscriptions/status/6123abcd4567ef1234567890');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.plan).toBe('VIP');
  });
});
