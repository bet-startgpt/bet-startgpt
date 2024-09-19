const footyStatsService = require('../../services/footyStatsService');

describe('Testando integração com FootyStats API', () => {
  it('Deve retornar dados da API FootyStats', async () => {
    const data = await footyStatsService.fetchFootyStats();
    expect(data).toHaveProperty('matches');
    expect(data.matches.length).toBeGreaterThan(0);
  });
});
