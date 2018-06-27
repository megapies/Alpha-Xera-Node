const Replyer = require('../helpers/replyer')
const command = /อีร่า/
const anti_command = /^$/
class AntiEraCommander{
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg) && !anti_command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = `อีร่าพ่อง`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: AntiEraCommander,
  commander: new AntiEraCommander(),
}
