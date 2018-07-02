const Replyer = require('../helpers/replyer')
const command = /ท้อ|เหนื่อย|ขอกำลังใจ/
const anti_command = /อย่า|ไม่|ท้อง/
class FightingCommander{
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg) && !anti_command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = `สู้ๆนะคะ เซร่าเป็นกำลังใจให้`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: FightingCommander,
  commander: new FightingCommander(),
}
