const PublicApi = require('./publicApi')();

const BitBayApi = () => {
  const getTrades = (currency1, currency2) => {
    return PublicApi.makeRequest('trades', currency1, currency2);
  };

  const getOrderbook = (currency1, currency2) => {
    return PublicApi.makeRequest('orderbook', currency1, currency2);
  };

  const getMarket = (currency1, currency2) => {
    return PublicApi.makeRequest('market', currency1, currency2);
  };

  const getTicker = (currency1, currency2) => {
    return PublicApi.makeRequest('ticker', currency1, currency2);
  };

  const getAll = (currency1, currency2) => {
    return PublicApi.makeRequest('all', currency1, currency2);
  };

  return {
    getTrades,
    getOrderbook,
    getMarket,
    getTicker,
    getAll,
  };
};

module.exports = BitBayApi;
