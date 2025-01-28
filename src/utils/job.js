const cron = require('node-cron');
const EmailService = require('../services/email-service');
const sender = require('../config/emailConfig');

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await EmailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to: email.recipientEmail,
                subject: email.subject,
                content: email.content
            }, async (err, data) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    await EmailService.updateTicket(email.id, {status: "SUCCESS"});
                }
            })
        });

        console.log(response);
    })
}

module.exports = setupJobs;