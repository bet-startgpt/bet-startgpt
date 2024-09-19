const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de configuração de APIs', () => {
  it('Deve buscar configurações de APIs', async () => {
    const res = await request(app)
      .get('/api/admin/api-config')
      .set('Authorization', `Bearer token`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(3);  // Exemplo: 3 APIs configuradas
  });

  it('Deve alternar status de API', async () => {
    const res = await request(app)
      .post('/api/admin/api-config/FootyStats/toggle')
      .set('Authorization', `Bearer token`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Status da API alternado com sucesso');
  });
});
