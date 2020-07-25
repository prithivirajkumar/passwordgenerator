
var PORT = process.env.PORT || 3000;
const express= require("express");
var app= express();
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index.ejs");
})

app.listen(PORT,function(req,res){
    console.log("server oonnected");
})