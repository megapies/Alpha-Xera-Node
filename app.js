const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.post('/webhook', function(req, res){
    res.sendStatus(200);
});

app.get("/", function(req, res){
    res.end("Hello, I'm Xera.")
})


app.listen(port, function(){
    console.log("running at port", port);
});
