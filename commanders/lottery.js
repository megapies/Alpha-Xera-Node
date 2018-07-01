const Replyer = require('../helpers/replyer')
const command = /ใบ้หวย|เลขเด็ด/
const anti_command = /^$/
class LotteryCommander{
	
  constructor(){
  }
  
  name(){
    return 'Lottery'
  }
  checkMessage(msg){
    return command.test(msg) && !anti_command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const number2 = Math.floor(Math.random() * 100)
                        .toString().padStart(2, '0')
    const msg = `งวดนี้ เลขท้าย2ตัว ${number2} #แม่หมอเซร่า`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: LotteryCommander,
  commander: new LotteryCommander(),
}
