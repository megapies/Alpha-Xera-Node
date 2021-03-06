const rp = require('request-promise')
const Replyer = require('../helpers/replyer')
const command = /morning|^mn$|อรุณสวัส|[xX]era forecast/
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
      const reply_message = 
`อรุณสวัสดิ์ค่ะ
สภาพอากาศวันนี้${sumWeather}
อุณหภูมิสูงสุด ${highTemp} °C
อุณหภูมิต่ำสุด ${lowTemp} °C`
      Replyer.replyMessage(event.replyToken, reply_message)
      
    }catch(error){
      console.log('weather error', error)
    }
  }
}

module.exports = {
  staticClass: MorningCammander,
  commander: new MorningCammander()
}
