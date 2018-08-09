const Pusher = require('../../helpers/pusher')
class PushMessageConsoler{
  async operate({
    event,
    token
  }){
    const to = token.params[0]
    const msg = token.params[1]
    const isGroup = token.flags.includes('-g')

    await Pusher.pushMessage({
      type: (isGroup)?'group':'user',
      userId: (isGroup)?undefined:to,
      groupId: (isGroup)?to:undefined,
    }, [{
      type: 'text',
      text: msg
    }])
  }
}

module.exports = {
  staticClass: PushMessageConsoler,
  consoler: new PushMessageConsoler(),
  command: 'push',
}