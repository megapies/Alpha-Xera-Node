const COMMAND = /[xX][eE][rR][aA], *sayonara/
class LeaveGroupCammander{
  
  name(){
    return 'Leave Group'
  }
  checkMessage(msg){
    return COMMAND.test(msg)
  }

  perform(event){
    console.log('leave group')
  }
}

module.exports = {
  staticClass: LeaveGroupCammander,
  commander: new LeaveGroupCammander(),
}