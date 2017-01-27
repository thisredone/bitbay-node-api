const test = require('blue-tape')
const BitBayApi = require('./index')()
const PublicApi = require('./publicApi')()

test('missing category argument', t => {
  return t.shouldFail(PublicApi.makeRequest(), Error)
})

test('missing first currency argument', t => {
  return t.shouldFail(PublicApi.makeRequest('all'), Error)
})

test('invalid category', t => {
  return t.shouldFail(PublicApi.makeRequest('test', 'USD'), Error)
})

test('invalid first currency', t => {
  return t.shouldFail(PublicApi.makeRequest('all', 'NMC'), Error)
})

test('invalid second currency', t => {
  return t.shouldFail(PublicApi.makeRequest('all', 'USD', 'NMC'), Error)
})

test('both currencies are identical', t => {
  return t.shouldFail(PublicApi.makeRequest('all', 'USD', 'USD'), Error)
})
