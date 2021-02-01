//communicate with email microservice

const sendEmail = (req, res, next) => {
    //
    console.log(req.body);
    
    return res.json({status: "accepted"});
}

module.exports = { sendEmail };