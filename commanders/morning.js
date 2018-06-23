const command = /morning|^mn$|อรุณสวัส/
class MorningCammander{
  name(){
    return 'Morning'
  }

  checkMessage(msg){
    console.log('msg', msg)
    return command.test(msg)
  }
  perform(event){
    console.log('morning')
  }
}

module.exports = {
  staticClass: MorningCammander,
  commander: new MorningCammander()
}