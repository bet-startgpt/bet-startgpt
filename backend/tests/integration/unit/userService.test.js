const userService = require('../../services/userService');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.connection.close();
});

describe('Testando serviço de usuários', () => {
  it('Deve criar um novo usuário', async () => {
    const userData = { username: 'teste', email: 'teste@example.com', password: '123456' };
    const user = await userService.createUser(userData);
    
    expect(user).toHaveProperty('_id');
    expect(user.username).toBe('teste');
  });

  it('Deve autenticar um usuário', async () => {
    const userData = { email: 'teste@example.com', password: '123456' };
    const token = await userService.loginUser(userData);
    
    expect(token).toBeDefined();
  });
});
