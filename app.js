function DigitalClock(){
  let date = new Date()

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let timeFormat = 'AM'

  if(hours === 0){
    hours = 12
  }
  if (hours === 12) {
    timeFormat = 'PM'
  } else if(hours > 12){
    hours = hours - 12
    timeFormat = 'PM'
  }
  hours = hours < 10 ? '0'+hours : hours
  minutes = minutes < 10 ? '0'+minutes : minutes
  seconds = seconds < 10 ? '0'+seconds : seconds

  let clock = `${hours}:${minutes}:${seconds}`
  
  document.getElementById("time").innerText = clock
  document.querySelector('small').innerText = timeFormat

  setInterval(DigitalClock, 1000)
}

DigitalClock()
