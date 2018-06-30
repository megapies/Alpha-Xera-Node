const Replyer = require('../helpers/replyer')
const command = /ไปไหน/

class TravelCommander{
  constructor(){
  	this.places = [
  	'สยาม',
  	'เกษตรแฟร์',
  	'เซนทรัลลาดพร้าว',
  	'คลองถม',
  	'ไต้หวัน',
  	'ห้องนอน',
  	'ห้องน้ำ',
  	'วัด',
  	'สวนสนุก'
  	]
  }
  name(){
    return 'Travel'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const place = this.places[Math.floor(Math.random() * this.places.length)]
    const msg = `ไป${place}คะ`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: TravelCommander,
  commander: new TravelCommander(),
}
