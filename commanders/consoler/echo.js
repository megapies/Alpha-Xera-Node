const Replyer = require('../helpers/replyer')
class EchoConsoler{
  async operate({
    event,
    token
  }){
    await Replyer.replyMessage(event.replyToken, event.message.text)
  }
}

module.exports = {
  staticClass: EchoConsoler,
  consoler: new EchoConsoler(),
  command: 'echo',
}