const Pusher = require('../../helpers/pusher')
const schedule = require('node-schedule')
class AlertConsoler{
  constructor(){

  }

  async operate({
    event,
    token
  }){
    const date = new Date(token.params[0])
    const msg = token.params[1]
    const job = schedule.scheduleJob(date, function(){
      console.log(msg)
      Pusher.pushMessage(event.source, [msg])
    })
    console.log(date, job)
  }
}

module.exports = {
  staticClass: AlertConsoler,
  consoler: new AlertConsoler(),
  command: 'alert'
}