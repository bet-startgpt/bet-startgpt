const axios = require('axios');

const checkApiConnection = async (apiName, url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    console.log(`${apiName} está funcionando corretamente.`);
    return true;
  } catch (error) {
    console.error(`Erro ao conectar com ${apiName}:`, error.message);
    return false;
  }
};

// Verificando APIs
(async () => {
  await checkApiConnection('FootyStats', 'https://api.footystats.org/endpoint', {
    'Authorization': `Bearer ${process.env.FOOTYSTATS_API_KEY}`
  });
  
  await checkApiConnection('Highlightly', 'https://api.highlightly.com/endpoint', {
    'Authorization': `Bearer ${process.env.HIGHLIGHTLY_API_KEY}`
  });
})();
