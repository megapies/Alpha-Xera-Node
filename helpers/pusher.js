class MessagePusher{
  static async pushMessage({
    type,
    userId,
    roomId,
    groupId
  }, messages){
    let to
    switch(type){
      case 'group' :
        to = groupId
        break
      case 'room' :
        to = roomId
        break
      default :
        to = userId
        break
    }
    const options = {
      method: 'POST',
      url: `${process.env.LINE_BOT_API}/message/push`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_ACCESS_TOKEN}`
      },
      body: {
        to,
        messages
      },
      json: true
    };
  
    try {
      const res = await rp(options);
      console.log("push message with status", res.statusCode);
    } catch (error) {
      console.log("push error with status", error.statusCode);
      console.log(error)
    }
  }
}

module.exports = MessagePusher