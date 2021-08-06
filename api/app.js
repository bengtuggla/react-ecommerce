const express = require('express');
const app = express();
const cors = require('cors');
const productController = require('./controllers/ProductController');

//Importera Controller

app.use(cors());

//MW för att kunna läsa & anv. json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/products', productController);

module.exports = app;
