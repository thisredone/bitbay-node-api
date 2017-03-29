const request = require('request-promise');

const PublicApi = (currencies) => {
  const apiAddress = 'https://bitbay.net/API/Public';

  const buildAddress = (category, currency1, currency2) => {
    return `${apiAddress}/${currency1}${currency2}/${category}.json`;
  };

  const validateRequest = (category, currency1, currency2) => {
    if (category == null) {
      throw new Error('Category is required');
    }

    if (currency1 == null) {
      throw new Error('First currency is required');
    }

    if (currency1 === currency2) {
      throw new Error('First currency must be different than second currency');
    }
  };

  const makeRequest = (category, currency1, currency2 = 'USD') => {
    try {
      validateRequest(category, currency1, currency2);
    } catch (err) {
      return Promise.reject(err);
    }

    const address = buildAddress(category, currency1, currency2);

    return request.get(address);
  };

  return {
    makeRequest,
  };
};

module.exports = PublicApi;
