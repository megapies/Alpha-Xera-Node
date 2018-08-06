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
    const job = schedule.scheduledJob(date, function(){
      console.log(msg)
    })
    console.log(date, job)
  }
}

module.exports = {
  staticClass: AlertConsoler,
  consoler: AlertConsoler,
  command: 'alert'
}