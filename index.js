// Core or NPM Modules
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./routes/index'),
    session = require('express-session');

// Public directory
app.use('/static', express.static('./public'));

// View Configuration
app.set('view engine', 'ejs')

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false
}));

// Routes
app.use(routes);

app.get(['/', '/dock', '/admin'], (req, res) => {
    res.render('index.ejs');
});

app.get('*', (req, res) => {
    res.send(req.session.user);
});

app.get('/test', (req, res) => {
    res.render('test.ejs');
});

// Server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening at port: ', process.env.PORT || 3000);
});