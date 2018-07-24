var friends = require("../data/friends.js");
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });


    // Still need a POST route to 
    // take in the survey data
    // and return a friend
};