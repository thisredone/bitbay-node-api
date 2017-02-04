const querystring = require('querystring');

const PrivateApi = () => {
  let publicKey = null;
  let secretKey = null;

  const setPublicKey = (pKey) => {
    publicKey = pKey;
  };

  const setSecretKey = (sKey) => {
    secretKey = sKey;
  };

  const getTimeInSeconds = () => {
    return new Date().getTime() / 1000;
  };

  const prepareQuerystring = () => {
    
  };

  const signRequest = (method) => {
    const time = getTimeInSeconds();

    querystring
  };

  return {
    setPublicKey,
    setPrivateKey,
  };
}
