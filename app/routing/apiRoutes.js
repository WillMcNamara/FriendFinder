var friends = require("../data/friends").friends;
var express = require("express");

function apiGet(app){
    app.get("/api/friends", function(res, req){
        res.json(friends)
    })

    app.post("/api/friends", function(res, req){
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    })
}
module.exports = apiGet;