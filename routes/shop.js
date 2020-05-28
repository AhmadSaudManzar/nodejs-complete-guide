const express = require('express');

const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next) => {
    //console.log('In the next Middleware'); 
    //res.send('<h1>Hello From Express</h1>')
    //res.sendFile(path.join(__dirname,'../', 'views', 'shop.html')); 
    //res.sendFile(path.join(rootDir, 'views', 'shop.html')); 
    res.render('shop', {
        prods: adminData.products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: adminData.products.length > 0,
        activeShop: true,
        productsCSS: true
    });
});

module.exports = router; 