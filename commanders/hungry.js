const Replyer = require('../helpers/replyer')
const command = /หิว/

class HungryCommander{
  
  name(){
    return 'Hungry'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const food = 'ผัดกระเพรา'
    const msg = `วันนี้กิน${food}ดีมั๊ยคะ`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: HungryCommander,
  commander: new HungryCommander(),
}
