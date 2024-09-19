const userService = require('../services/userService');

// Controlador para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
  }
};

// Controlador para login de usuário
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await userService.loginUser(email, password);
    res.status(200).json({ message: 'Login realizado com sucesso', token, user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao fazer login', error: error.message });
  }
};

// Controlador para atualizar o perfil do usuário
exports.updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const profileData = req.body;

  try {
    const updatedUser = await userService.updateUserProfile(userId, profileData);
    res.status(200).json({ message: 'Perfil atualizado com sucesso', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar perfil', error: error.message });
  }
};

// Controlador para verificar o status da assinatura
exports.checkSubscriptionStatus = async (req, res) => {
  const userId = req.user.id;

  try {
    const subscriptionStatus = await userService.checkSubscriptionStatus(userId);
    res.status(200).json({ subscriptionStatus });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao verificar status de assinatura', error: error.message });
  }
};
