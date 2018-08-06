const Replyer = require('../../helpers/replyer')
const Pusher = require('../../helpers/pusher')
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
    await Pusher.pushMessage(event.source, [{
      type: 'text',
      text: msg + '-push'
    }])
  }
}

module.exports = {
  staticClass: EchoConsoler,
  consoler: new EchoConsoler(),
  command: 'echo',
}