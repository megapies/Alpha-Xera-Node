const Replyer = require('../helpers/replyer')
const command = /^xera /

class FightingCommander{
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = `xera operation complete`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: FightingCommander,
  commander: new FightingCommander(),
}