const express = require('express');

const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

// pass controller reference 
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET 
router.get('/products', adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);

module.exports = router;
