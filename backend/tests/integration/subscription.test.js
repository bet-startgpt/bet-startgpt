const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando assinaturas de usuários', () => {
  it('Deve criar uma nova assinatura', async () => {
    const res = await request(app)
      .post('/api/subscription/create')
      .send({ userId: '12345', plan: 'VIP' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('plan', 'VIP');
    expect(res.body).toHaveProperty('paymentStatus', 'Pendente');
  });

  it('Deve verificar o status da assinatura', async () => {
    const res = await request(app)
      .get('/api/subscription/status/12345');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('subscription');
  });
});
