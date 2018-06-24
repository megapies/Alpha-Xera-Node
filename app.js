const express = require("express");
const app = express();
const rp = require('request-promise');
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 4000;

// const LeaveGroupCommander = require('./commanders/leave_group')
const commanders = require('./commanders')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.post('/webhook', function (req, res) {
  console.log(req.body.events)
  const event = req.body.events[0]
  const event_type = event.type
  console.log(req.body);
  console.log("message-->", req.body.events[0].message)
  console.log("source-->", req.body.events[0].source)
  console.log('env', process.env.LINE_BOT_API)
  if (event_type === 'message') {
    const msg = event.message.text
    commanders.forEach(commander => {
      if (commander.checkMessage(msg)) {
        commander.perform(event)
      }
    })
  }
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  let source = req.body.events[0].source;

  if(!!msg && source.type === 'group' && msg === 'Zera, Sayonara'){
      leaveGroup(reply_token, source.groupId)
  }
  // else{
  //     echoMsg(reply_token, msg);
  // }
  res.sendStatus(200);
});

app.get("/", function (req, res) {
  commanders.forEach(commander => {
    console.log(commander.perform)
  })
  res.end();
  // res.end("Hello, I'm Xera.")
})

async function leaveGroup(reply_token, group_id) {
  try {
    await echoMsg(reply_token, "ลาก่อนค่ะ");
    const options = {
      method: 'POST',
      url: `https://api.line.me/v2/bot/group/${group_id}/leave`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer N5/pvsQEdNTKM6aMP9IuZ2X2f3gIVSokI31lzGFBH8ommp9hY4tfJGQfhqzNjE+58R+ycMNxqDZpJB4KGXMPDsZnxREe4Q5DFrpjbfbY9L18VcmDqh6X31jbEBDLE5oUEXoHEwAhYN51ZLlTvVDZLAdB04t89/1O/w1cDnyilFU='
      },
      json: true
    };
    const res = await rp(options);
    console.log("reply message with status", res.statusCode);
  } catch (error) {
    console.log("reply message with status", res.statusCode);
  }
}

async function echoMsg(reply_token, msg) {
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

  try {
    const res = await rp(options);
    console.log("reply message with status", res.statusCode);
  } catch (error) {
    console.log("reply message with status", res.statusCode);
  }
}


app.listen(port, function () {
  console.log("running at port", port);
});
