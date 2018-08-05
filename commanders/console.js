const Replyer = require('../helpers/replyer')
const command = /^xera /

class FightingCommander{
  
  name(){
    return 'Hello'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  async perform(event){
    const replyToken = event.replyToken
    // const food = 'ผัดกระเพรา'
    const msg = `xera operation complete`
    const token = this.tokenize(event.message)
    console.log(token)
    await Replyer.replyMessage(replyToken, msg)
  }

  tokenize(message){
    message = message.slice(5, message.length)
    const token = {
      command: null,
      flags: [

      ],
      params: [

      ]
    }
    let buffer = ''
    let inQuote = false
    let quote = ''
    for(let c of message){
      if(c === ' ' && !inQuote){
        if(token.command === null)
          token.command = buffer
        else if(buffer[0] === '-')
          token.flags.push(buffer)
        else 
          tokem.params.push(buffer)
      }
      else if((c === '\"' || c === '\'') && c !== quote){
        inQuote = !inQuote
        quote = (quote === '')?c:''
      }
      else {
        buffer = buffer + c
      }
    }

    return token
  }
}

module.exports = {
  staticClass: FightingCommander,
  commander: new FightingCommander(),
}