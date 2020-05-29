const express = require('express');

const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

const adminData = require('./admin')

const productsController = require('../controllers/products.js');

router.get('/', productsController.getProducts);

module.exports = router; 