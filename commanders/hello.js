const Replyer = require('../helpers/replyer')
const command = /^[xX][eE][rR][aA]$|^[hH][eE][lL][lL][oO]$|^Hello, Xera$|^สวัสดี$/

class HelloCommander{
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = `สวัสดีค่ะ, เซร่ายินดีรับใช้`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: HelloCommander,
  commander: new HelloCommander(),
}