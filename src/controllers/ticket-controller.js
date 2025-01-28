const TicketService = require('../services/email-service');


const create = async(req,res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully registered an email reminder",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Unable to register an email reminder"
        })
    }
}

module.exports ={
    create
}