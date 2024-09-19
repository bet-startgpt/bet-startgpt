const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando logs de atividades de usuários', () => {
  it('Deve registrar uma atividade de usuário', async () => {
    const res = await request(app)
      .post('/api/user-activity/log')
      .send({ userId: '12345', activity: 'Login' });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('activity', 'Login');
  });

  it('Deve buscar logs de atividades de um usuário', async () => {
    const res = await request(app)
      .get('/api/user-activity/12345');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
