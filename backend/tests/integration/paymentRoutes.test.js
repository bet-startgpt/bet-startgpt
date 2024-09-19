const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de pagamentos', () => {
  it('Deve criar um pagamento', async () => {
    const res = await request(app)
      .post('/api/payments/create')
      .send({
        userId: '12345',
        plan: 'VIP',
        amount: 69.90
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Pagamento criado com sucesso');
  });

  it('Deve verificar o status do pagamento', async () => {
    const res = await request(app)
      .get('/api/payments/verify/12345');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('paymentStatus');
    expect(res.body.paymentStatus).toBeDefined(); // Assegurar que o status está definido
  });
});
