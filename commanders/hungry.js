const Replyer = require('../helpers/replyer')
const command = /หิว/

class HungryCommander{
  constructor(){
  	this.foods = [
  	'ผัดกระเพราหมู',
  	'ผัดกระเพราไก่',
  	'ไก่ทอด KFC',
  	'ข้าวต้ม',
  	'ข้าวมันไก่',
  	'สเต็กไก่',
  	'เบอร์เกอร์',
  	'ส้มตำ',
  	'ซาลาเปา',
  	'นม',
  	'กุ้งเผา',
  	'สปสเก็ตตี้ขี้เมาทะเล',
  	'แกงกะหรี่',
  	'หอยทอด',
  	'กุ้งอบวุ้นเส้น',
  	'สตอเบอรี่',
  	'ทุเรียน',
  	'ข้าวหมื่นลี้',
  	'หวุ่นฟานไก่',
  	]
  }
  name(){
    return 'Hungry'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const food = this.foods[Math.floor(Math.random() * this.foods.length))]
    const msg = `วันนี้กิน${food}ดีมั๊ยคะ`
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: HungryCommander,
  commander: new HungryCommander(),
}
