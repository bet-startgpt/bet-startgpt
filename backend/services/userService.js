const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Serviço para criar um novo usuário
exports.createUser = async (userData) => {
  const { name, email, password } = userData;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error('Erro ao criar o usuário: ' + error.message);
  }
};

// Serviço para login de usuário
exports.loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Senha incorreta.');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
  } catch (error) {
    throw new Error('Erro ao fazer login: ' + error.message);
  }
};
