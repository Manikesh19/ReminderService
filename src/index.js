const express = require('express');
const app = express();
const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
    });

}

setupAndStartServer();