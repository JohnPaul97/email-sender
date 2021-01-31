const User = require('../model/user');

function getUsers(req, res, next) {
    console.log('GET users from controller');

    User.find({}, {}, function (err, result) {
        if (err) {
            return res.status(400).json({
                status: 'Error',
                message: 'On get users'
            })
        }
        console.log("req res", result);

        // req.resources.users = result;
        // next();
        return res.json({data: result});
    })
}

function createUsers(req, res, next) {
    console.log('POST users from controller');
    console.log('POST received ' + req.body);

    const user = new User({ username: "ion", password: "ion" });

    user.save(function (err, response) {
        if (err) {
            return res.status(400).json({
                status: 'Error',
                message: 'On create users'
            })
            // console.log(err);
        }

        return res.json({ data: response });
    })
    console.log('after save');
    // return res.json({message: 'message post'});
}

module.exports = {
    getUsers : getUsers,
    createUsers: createUsers
}
