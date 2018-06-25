const command = /[xX][eE][rR][aA], *sayonara/
class LeaveGroupCammander{
  
  name(){
    return 'Leave Group'
  }
  checkMessage(msg){
    return command.test(msg)
  }

  perform(event){
    console.log('leave group')
  }
}

module.exports = {
  staticClass: LeaveGroupCammander,
  commander: new LeaveGroupCammander(),
}