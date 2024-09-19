const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando configuração de APIs', () => {
  it('Deve atualizar a chave de uma API', async () => {
    const res = await request(app)
      .post('/api/api-config/update-key')
      .send({ apiName: 'FootyStats', apiKey: 'new-api-key' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('apiName', 'FootyStats');
    expect(res.body).toHaveProperty('apiKey', 'new-api-key');
  });

  it('Deve ativar/desativar uma API', async () => {
    const res = await request(app)
      .post('/api/api-config/toggle-status')
      .send({ apiName: 'FootyStats', enabled: false });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('enabled', false);
  });
});
