// Find the global module, which ships with node.js 
const http = require('http');
//const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Setting templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Router Object 
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 Error Route, when no matches
app.use(errorController.get404);

app.listen(3000);

