const express = require('express');
const app = express();
const path = require('path');
//const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/myexpertskill', { useNewUrlParser: true }).then(db => {
    console.log('MONGO conected');
}).catch(error => console.log("COULD NOT CONNECT" + error));


// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Angular dist output folder branch
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api)

//send all other requests to the ANgular app
app.set('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));