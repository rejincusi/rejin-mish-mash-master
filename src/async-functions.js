const superagent = require('superagent');

const getTatooineResidents = () => {
  return superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => {
      return Promise.resolve(res.body.residents)
    })
    .catch(err => {
      return Promise.reject(err)
    });
}

const promiseMeAString = (message) => {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string') {
      reject('You have failed me!')
    } else {
      resolve('You kept the Promise!')
    }
  })
}

module.exports = { getTatooineResidents, promiseMeAString }