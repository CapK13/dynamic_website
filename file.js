var express = require("express");
var port = process.env.PORT || 9090;
var app = express();
var hbs = require("hbs");
app.set("view engine","hbs");
app.get("/",function(_,res){
    res.render("index");
});
app.listen(port,function(err){  
    if(err){
        console.log(err);
    } 
    else{
        console.log("server is running at "+port);
    }
});