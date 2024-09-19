const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rota de notificações', () => {
  it('Deve enviar uma notificação para um usuário', async () => {
    const res = await request(app).post('/api/notifications/send').send({
      userId: '6123abcd4567ef1234567890',
      message: 'Teste de notificação'
    });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Notificação enviada com sucesso');
  });
});
