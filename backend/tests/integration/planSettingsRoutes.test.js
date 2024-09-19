const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de configuração de planos', () => {
  it('Deve buscar configurações do plano do usuário', async () => {
    const res = await request(app)
      .get('/api/users/settings')
      .set('Authorization', `Bearer token`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('dailyTipsLimit');
  });

  it('Deve atualizar configurações do plano do usuário', async () => {
    const res = await request(app)
      .post('/api/users/settings')
      .send({ dailyTipsLimit: 10, tipsEnabled: true })
      .set('Authorization', `Bearer token`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Configurações atualizadas com sucesso');
  });
});
