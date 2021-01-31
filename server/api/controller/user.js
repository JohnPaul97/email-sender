const User = require('../model/user');
const { use } = require('../routes/users');

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

// function createUsers(req, res, next) {
//     console.log('POST users from controller');
//     console.log('POST received ' + req.body);

//     const user = new User({ username: "ion", password: "ion" });

//     user.save(function (err, response) {
//         if (err) {
//             return res.status(400).json({
//                 status: 'Error',
//                 message: 'On create users'
//             })
//             // console.log(err);
//         }

//         return res.json({ data: response });
//     })
//     console.log('after save');
//     // return res.json({message: 'message post'});
// }

function login (req, res, next) {
    const {username, password} = req.body;

    User.find({username}, function(err, response) {
        if(err){
            console.log("err " + username);
        }

        if(response.length === 0){
            console.log('no such user ' + username);
            next();
            // return next({message: "Inexistent user with that email!", status: 404});
        }

        let user = response[0];

        if(user.password !== password){
            next();
            console.log('incorrect password');
        }

        return res.json({data: user});
    })
}

module.exports = {
    getUsers : getUsers,
    login: login
}
