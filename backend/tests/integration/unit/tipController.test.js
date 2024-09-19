const { createTip, getAllTips, sendTipToUser } = require('../../controllers/tipController');
const Tip = require('../../models/Tip');
jest.mock('../../models/Tip');

describe('Testando Tip Controller', () => {
  it('Deve criar um novo tip', async () => {
    const req = { body: { match: 'Time A vs Time B', prediction: 'Vitória Time A', odds: 1.5 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createTip(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Sinal criado com sucesso' });
  });

  it('Deve listar todos os tips', async () => {
    Tip.find.mockResolvedValue([{ match: 'Time A vs Time B', prediction: 'Vitória Time A', odds: 1.5 }]);

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAllTips(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ match: 'Time A vs Time B', prediction: 'Vitória Time A', odds: 1.5 }]);
  });
});
