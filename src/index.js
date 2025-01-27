const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');
const cron = require('node-cron');

const bodyParser = require('body-parser');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);

        // sendBasicEmail(
        //     'shreyansh19dec@gmail.com',
        //     'manikesh19dec@gmail.com',
        //     'Test Email',
        //     'Hey, how are you, I hope you like the support!'
        // );
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('Running a task every two minutes');
        // })
    });

}

setupAndStartServer();