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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// 404 Error Route, when no matches
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '/pageNotFound'
    });
});

app.listen(3000);

