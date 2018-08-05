const Replyer = require('../../helpers/replyer')
class EchoConsoler{
  async operate({
    event,
    token
  }){
    console.log(event)
    console.log(event.replyToken)
    const replyToken = event.replyToken
    const msg = token.params[0]
    await Replyer.replyMessage(replyToken, msg)
  }
}

module.exports = {
  staticClass: EchoConsoler,
  consoler: new EchoConsoler(),
  command: 'echo',
}