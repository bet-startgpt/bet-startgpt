const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando serviço de notificações', () => {
  it('Deve enviar notificação via Telegram', async () => {
    const res = await request(app)
      .post('/api/notifications/send')
      .send({ userId: '12345', message: 'Notificação teste' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Notificação enviada com sucesso');
  });
});
