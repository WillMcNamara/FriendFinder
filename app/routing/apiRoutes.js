var friends = require("../data/friends").friends;
var express = require("express");

function apiGet(app){   
    //grabbing info from friends array
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // posting info to friends array
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        friends.push(newFriend);

        var compat = 0;

            for (i = 0; i = friends.length; i++){
                for (j = 0; j < 10; j++){
                    
                }
            }
        res.json(friends[0]);
    });
}

module.exports = apiGet;