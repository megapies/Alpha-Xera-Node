const Replyer = require('../helpers/replyer')
const command = /ขอใบลา/
const anti_command = /ลาออก/
class LeafletCommander{
  
  name(){
    return 'Leaflet'
  }
  checkMessage(msg){
    return command.test(msg) && !anti_command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = 
    `นี้ค่ะใบลา
    http://ms.src.ku.ac.th/manual/document/ใบลา.pdf`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: LeafletCommander,
  commander: new LeafletCommander(),
}
