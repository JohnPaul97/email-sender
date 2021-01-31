var controllers = {
    about: function(req, res) {
        let about = {
            info: "This is a coProduction nodejs and google",
            author: "johnpaul97"
        }
        
        res.json(about);
    }
}

module.exports = controllers;