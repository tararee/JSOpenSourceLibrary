var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');

sequelize.sync({force: true}); // tip: {force: true} for resetting tables

// use bodyparser
app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/log', require('./routes/log'));
app.use('/api/definitions', require('./routes/definition'));

app.use('/test', function(req, res) {
    res.send('hello world');
});

app.listen(3000, function() {
    console.log('app is listening on port 3000...');
});