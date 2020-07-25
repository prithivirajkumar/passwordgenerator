const express= require("express");
var app= express();
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index.ejs");
})

app.listen("3000",function(req,res){
    console.log("server oonnected");
})