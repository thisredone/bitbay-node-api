const crypto = require('crypto');
const querystring = require('querystring');
const request = require('request-promise');

const PrivateApi = ({ publicKey, secretKey }) => {
  const apiAddress = 'https://bitbay.net/API/Trading/tradingApi.php';
  const hashFunction = 'sha512';

  const getTimeInSeconds = () => {
    return Math.floor(new Date().getTime() / 1000);
  };

  const prepareQuerystring = (params) => {
    return querystring.stringify(params);
  };

  const getHeaders = (qs) => {
    const hmac = crypto.createHmac(hashFunction, secretKey);
    
    return {
      'API-Key': publicKey,
      'API-Hash': hmac.update(qs).digest('hex'),
    };
  };

  const makeRequest = (method, params = {}) => {
    params['method'] = method;
    params.moment = getTimeInSeconds();

    const qs = Buffer.from(prepareQuerystring(params));
    const headers = getHeaders(qs);

    return request.post(apiAddress, { form: params, headers: headers });
  };

  return {
    makeRequest,
  };
}

module.exports = PrivateApi;
