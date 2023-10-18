const container =document.querySelector('.container')
const search =document.querySelector('.search-box')
const weaterBox =document.querySelector('.weather-box')
const weatherDetail =document.querySelector('.waether-deatali')


search.addEventListener('click', () => {
      const APIkey = '499cac9ba9f936b2caddc35a15870bde';
      const city = document.querySelector('.search-box input').value;


      if (city =='') 
            return;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(response => response.json()).then(json =>{
            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector('.weather-box temperature')
            const discription = document.querySelector('.weather-box discript')
            const humidity = document.querySelector('.waether-deatali .homudity')
            const wind = document.querySelector('.waether-deatali .wind')

            switch (json.weater[0].main) {
                  case 'Clear':
                        image.src ='accets/sun.png'
                  break;
            
                  case 'Rain':
                        image.src ='accets/cloud 4.png'
                  break;
                  case 'Mist':
                        image.src ='accets/mistt.png'
                  break;
                  case 'Snow':
                        image.src ='accets/snow.png'
                  break;
                  case 'Clouds':
                        image.src ='accets/cloud 2.png'
                  break;
                  case 'Haze':
                        image.src ='accets/mist.png'
                  break;
                  default:
                        image.src ='accets/cloud 1.png'
                  
            }
      })
})