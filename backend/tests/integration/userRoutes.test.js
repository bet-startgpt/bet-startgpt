const request = require('supertest');
const app = require('../../startServer');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando rotas de usuários', () => {
  it('Deve registrar um novo usuário', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testeUsuario',
        email: 'teste@teste.com',
        password: 'senha123'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Usuário registrado com sucesso');
  });

  it('Deve realizar login de usuário', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'teste@teste.com',
        password: 'senha123'
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
