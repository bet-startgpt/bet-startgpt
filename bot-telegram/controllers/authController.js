const User = require('../../backend/models/User');

// Controlador para autenticar o usuário no Telegram
exports.authenticateUser = async (req, res) => {
  const { phoneNumber, code } = req.body;

  try {
    // Exemplo simples de autenticação com verificação do número de telefone
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    if (user.authCode !== code) {
      return res.status(401).json({ message: 'Código de autenticação inválido.' });
    }

    res.status(200).json({ message: 'Autenticação realizada com sucesso.', user });
  } catch (error) {
    res.status(500).json({ message: `Erro ao autenticar o usuário: ${error.message}` });
  }
};
