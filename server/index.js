const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/api', require('./api'));

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.messager || 'Internal Server Error')
})

app.listen(port, function() {
    console.log(`Listening on ${port}`)
})

module.exports = app;