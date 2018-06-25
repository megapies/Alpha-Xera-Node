const Replyer = require('../helper/replyer')
const command = /หิว/

class HungryCammander{
  
  name(){
    return 'Hungry'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const food = 'ผัดกระเพรา'
    const msg = `วันนี่กิน${food}ดีมั๊ยคะ`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: HungryCommander,
  commander: new HungryCammander(),
}