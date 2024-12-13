const fetch = require('node-fetch');
const result = fetch('https://global.vatapi.com/v2/country-code-check?code=DE')
    .then(res => res.json())
    .then(res => res.data);