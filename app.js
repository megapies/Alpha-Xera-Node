const express = require("express");
const app = express();
const rp = require('request-promise');
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.post('/webhook', function(req, res){
    console.log(req.body);
    console.log("message-->", req.body.events[0].message)
    console.log("source-->", req.body.events[0].source)
    let reply_token = req.body.events[0].replyToken;
    let msg = req.body.events[0].message.text;

    // if(!!msg && msg === 'Zera, Sayonara'){

    // }else{
    //     echoMsg(reply_token, msg);
    // }
    res.sendStatus(200);
});

app.get("/", function(req, res){
    res.end("Hello, I'm Xera.")
})

async function echoMsg(reply_token, msg){
    const options = {
        method: 'POST',
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer N5/pvsQEdNTKM6aMP9IuZ2X2f3gIVSokI31lzGFBH8ommp9hY4tfJGQfhqzNjE+58R+ycMNxqDZpJB4KGXMPDsZnxREe4Q5DFrpjbfbY9L18VcmDqh6X31jbEBDLE5oUEXoHEwAhYN51ZLlTvVDZLAdB04t89/1O/w1cDnyilFU='
        },
        body: {
            replyToken: reply_token,
            messages: [{
                type: 'text',
                text: msg + ", sir"
            }]
        },
        json: true
    };

    try{
        const res = await rp(options);
        console.log("reply message with status", res.statusCode);
    }catch(error){
        console.log("reply message with status", res.statusCode);
    }

}


app.listen(port, function(){
    console.log("running at port", port);
});
