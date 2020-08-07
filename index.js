const onReady = require('./dist');
const stock = require('./stock.js');

onReady.mapearInventario(stock.data);