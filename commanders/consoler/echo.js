const Pusher = require('../../helpers/pusher')
class EchoConsoler{
  async operate({
    event,
    token
  }){
    const msg = token.params[0]
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