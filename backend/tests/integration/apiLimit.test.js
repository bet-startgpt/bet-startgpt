const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando limites de API', () => {
  it('Deve definir um limite para uma API', async () => {
    const res = await request(app)
      .post('/api/api-limits/set')
      .send({ apiName: 'FootyStats', limit: 1000 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('apiName', 'FootyStats');
    expect(res.body).toHaveProperty('limit', 1000);
  });

  it('Deve buscar o limite de uma API', async () => {
    const res = await request(app)
      .get('/api/api-limits/get?apiName=FootyStats');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('apiName', 'FootyStats');
    expect(res.body).toHaveProperty('limit');
  });
});
