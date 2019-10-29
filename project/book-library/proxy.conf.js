const fs = require('fs');

const environment = process.env.PROXY || 'local';

const proxyConfigPath = './proxy-local-to-' + environment + '.conf.json';
const localProxy = fs.existsSync(proxyConfigPath) ? require(proxyConfigPath) : [];

module.exports = localProxy;
