require("dotenv").config();
class MessageReplyer {
  static async replyMessage(reply_token, msg) {
    const options = {
      method: 'POST',
      url: `${process.env.LINE_BOT_API}/message/reply`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_ACCESS_TOKEN}`
      },
      body: {
        replyToken: reply_token,
        messages: [{
          type: 'text',
          text: msg
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
}

module.exports = MessageReplyer