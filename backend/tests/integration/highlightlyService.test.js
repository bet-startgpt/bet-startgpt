const highlightlyService = require('../../services/highlightlyService');

describe('Testando integração com Highlightly API', () => {
  it('Deve retornar dados da API Highlightly', async () => {
    const data = await highlightlyService.fetchHighlightlyData();
    expect(data).toHaveProperty('highlights');
    expect(data.highlights.length).toBeGreaterThan(0);
  });
});
