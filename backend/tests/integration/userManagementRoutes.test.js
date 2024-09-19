const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de gestão de usuários', () => {
  it('Deve atualizar o plano do usuário', async () => {
    const res = await request(app)
      .post('/api/admin/users/updatePlan')
      .send({ userId: '12345', newPlan: 'VIP' })
      .set('Authorization', `Bearer token`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Plano atualizado com sucesso');
  });

  it('Deve buscar detalhes do usuário', async () => {
    const res = await request(app)
      .get('/api/admin/users/12345')
      .set('Authorization', `Bearer token`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('username');
  });
});
