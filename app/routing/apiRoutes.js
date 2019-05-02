var friends = require("../data/friends").friends;
var express = require("express");
var path = require("path");


function apiGet(app){   
    //grabbing info from friends array
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    console.log(friends);

    //posting info to friends array
    // app.post("/api/friends", function(res, req){
    //     var newFriend = req.body;
    //     friends.push(newFriend);
    //     res.json(newFriend);
    // })
}

module.exports = apiGet;