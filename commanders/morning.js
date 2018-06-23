const rp = require('request-promise')

const command = /morning|^mn$|อรุณสวัส/
class MorningCammander{
  name(){
    return 'Morning'
  }

  checkMessage(msg){
    console.log('msg', msg)
    return command.test(msg)
  }
  async perform(event){
    console.log('morning')
    const options = {
      method: 'GET',
      url: 'https://api.darksky.net/forecast/d1ccd1754d4e806af44608c587f3b059/13.763117,100.556012?units=si'
    }
    try{
      let weather = await rp(options)
      if(typeof weather === 'string')
        weather = JSON.parse(weather)
      // console.log('weather', weather)
      const todayWeather = weather.daily.data[0]
      const highTemp = todayWeather.temperatureHigh
      const lowTemp = todayWeather.temperatureLow
      const icon = todayWeather.icon
      let sumWeather
      switch(icon){
        case 'cloudy':
          sumWeather = 'มีเมฆมาก'
          break
        case 'cloudy':
          sumWeather = 'มีเมฆมาก'
          break
        case 'partly-cloudy-day' :
          sumWeather = 'มีเมฆเป็นบางส่วน'
          break
        case 'partly-cloudy-night' :
          sumWeather = 'มีเมฆเป็นบางส่วน'
          break
        case 'rain' :
          sumWeather = 'มีฝนตก'
          break
        default :
          sumWeather = icon
          break
      }
      // console.log('today', todayWeather)
      console.log('high temp', highTemp)
      console.log('low temp', lowTemp)
      console.log('icon', icon)

      this.replyMessage(
        event.replyToken,
`อรุณสวัสดิ์ค่ะ
สภาพอากาศวันนี้${sumWeather}
อุณหภูมิสูงสุด ${highTemp} °C
อุณหภูมิต่ำสุด ${lowTemp} °C`
      )
//       console.log(
//         `อรุณสวัสดิ์ค่ะ
// สภาพอากาศวันนี้${sumWeather}
// อุณหภูมิสูงสุด ${highTemp} °C
// อุณหภูมิต่ำสุด ${lowTemp} °C`)
    }catch(error){
      console.log('weather error', error)
    }
  }


  async replyMessage(reply_token, msg) {
    const options = {
      method: 'POST',
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer N5/pvsQEdNTKM6aMP9IuZ2X2f3gIVSokI31lzGFBH8ommp9hY4tfJGQfhqzNjE+58R+ycMNxqDZpJB4KGXMPDsZnxREe4Q5DFrpjbfbY9L18VcmDqh6X31jbEBDLE5oUEXoHEwAhYN51ZLlTvVDZLAdB04t89/1O/w1cDnyilFU='
      },
      body: {
        replyToken: reply_token,
        messages: [{
          type: 'text',
          text: msg
        }]
      },
      json: true
    };
  
    try {
      const res = await rp(options);
      console.log("reply message with status", res.statusCode);
    } catch (error) {
      console.log("reply message with status", res.statusCode);
    }
  
  }
}

module.exports = {
  staticClass: MorningCammander,
  commander: new MorningCammander()
}