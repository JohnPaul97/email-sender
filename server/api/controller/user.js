const User = require('../model/user');
const generateToken = require('../token').generateToken;


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
            
            return next;
        }

        if(response.length === 0){
            console.log('no such user ' + username);
            return next();
            // return next({message: "Inexistent user with that email!", status: 404});
        }

        let user = response[0];
            
        if(user.password !== password){
            console.log('incorrect password');
            return next();
        }

        return res.json({user: user, token: generateToken(user._id)});
    })
}

module.exports = {
    getUsers : getUsers,
    login: login
}
