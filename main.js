const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const weatherButton = document.querySelector('#weatherButton')


  dogButton.addEventListener('click', (event)=>{
    console.log('dog button pushed')
    event.preventDefault()
  fetch(dogUrl)
  .then((response)=>{
    console.log('response received')
    return response.json()
  })
  .then((object)=>{
    console.log('response processed')
    console.log(object.message)
    dogImage.src = object.message
    console.log(object)
  })

})

weatherButton.addEventListener('click', ()=>{
const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latBox.value}&longitude=${longBox.value}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
console.log('weather button pushed')
fetch(weatherUrl)
.then((response)=>{
    console.log('request received')
    // console.log(response.json())
    return response.json()
})
.then((object)=>{
    console.log('request processed')
    console.log(object)
