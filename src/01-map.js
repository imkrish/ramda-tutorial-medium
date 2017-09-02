const fs = require('fs')
const R  = require('ramda')

const parseJSONFromFile = (path) => R.compose(
  JSON.parse,
  fs.readFileSync
)(path)

const products = parseJSONFromFile('../products.json')

