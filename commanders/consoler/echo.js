const Replyer = require('../../helpers/replyer')
class EchoConsoler{
  async operate({
    event,
    token
  }){
    console.log(event)
    console.log(event.replyToken)
    await Replyer.replyMessage(event.replyToken, event.message.text)
  }
}

module.exports = {
  staticClass: EchoConsoler,
  consoler: new EchoConsoler(),
  command: 'echo',
}