const ApiUsage = require('../models/ApiUsage');

// Serviço para monitorar o consumo de APIs
exports.trackApiUsage = async (apiName) => {
  try {
    let apiUsage = await ApiUsage.findOne({ apiName });

    if (!apiUsage) {
      apiUsage = new ApiUsage({ apiName, calls: 1 });
    } else {
      apiUsage.calls += 1;
    }

    await apiUsage.save();
  } catch (error) {
    throw new Error(`Erro ao monitorar uso da API ${apiName}: ${error.message}`);
  }
};
