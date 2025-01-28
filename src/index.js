const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');

const bodyParser = require('body-parser');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets',TicketController.create);
    
    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        jobs();

        
        // sendBasicEmail(
        //     'shreyansh19dec@gmail.com',
        //     'anshumanverma555@gmail.com',
        //     'Test Email',
        //     'Hey, how are you, I hope you like the support!'
        // );
        
    });

}

setupAndStartServer();