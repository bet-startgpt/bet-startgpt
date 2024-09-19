// /backend/services/openaiService.js

const axios = require('axios');

// Função para gerar uma predição usando o GPT-4 Mini
exports.generatePrediction = async (prompt) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-4-mini/completions', {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
    });

    return response.data.choices[0].text;
  } catch (error) {
    throw new Error('Erro ao gerar predição com GPT-4 Mini: ' + error.message);
  }
};
