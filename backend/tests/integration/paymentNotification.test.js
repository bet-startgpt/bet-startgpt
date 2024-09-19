const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando notificações de pagamento', () => {
  it('Deve enviar uma notificação de pagamento', async () => {
    const res = await request(app)
      .post('/api/payment-notifications/send')
      .send({
        userId: '12345',
        message: 'Seu pagamento foi confirmado!'
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Notificação enviada com sucesso');
  });

  it('Deve buscar notificações de um usuário', async () => {
    const res = await request(app)
      .get('/api/payment-notifications/12345');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
