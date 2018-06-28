const Replyer = require('../helpers/replyer')
const command = /ง่วง|นอน|ฝันดี|^gn$|^good *night$/
const anti_command = /เมื่อคืน/
class GoodNightCommander{
	
  constructor(){
  	this.msgs = [
  	'ฝันดีค่ะ',
  	'ฝันดี ผีรอบเตียงค่ะ',
  	'ฝันดีค่ะ ขอให้ฝันถึงคนนั้นนะคะ',
  	'ฝีดันค่ะ']
  }
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg) && !anti_command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    const msg = this.msgs[Math.floor(Math.random() * this.foods.length)]
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: GoodNightCommander,
  commander: new GoodNightCommander(),
}
