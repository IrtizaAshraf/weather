const div =document.querySelector('.container')
const input =document.querySelector('.absolute ')
const search =document.querySelector('.fa-solid')
const weaterBox =document.querySelector('.weather-box')
const weatherDetail =document.querySelector('.waether-deatali')

div.style.display = "none"

input.addEventListener('click', (e) => {
      e.preventDefault();
      div.innerHTML =""
      if(input.value === ""){
          alert("Enter Any City")
    }
    else{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=9bd9bf4f66ae4776970212709231710&q=${input.value}`)
      .then((res) => {
        console.log(res.data);
        div.style.display = "block"
        div.innerHTML += `
        <div class="weather-box">
              <div class="box">
                    <div class="info-box">
                          <div class="weather  mt-8">
                                <img class="ml-20" src="accets/cloud 1.png" alt="cloud">
                                <p class="temperature relative text-6xl  font-bold">0 <span
                                            class="absolute text-2xl  ml-3">°C </span></p>
                                <p class="discript text-2xl font-medium">Broken cloud</p>
                          </div>
                    </div>
              </div>
        </div>

        <div class="waether-deatali  w-full flex mt-3 gap-6 text-sm">
              <div class="homudity pr-5 justify-start">
                    <i  class="fa-solid fa-water"></i>
                    <div class="text">
                          <div class="info-homudity">
                                <span class="font-medium text-2xl">0%</span>
                          </div>
                          <p>Humidty</p>
                    </div>
              </div>
              <div class="wind pr-5 justify-end">
                    <i class="fa-solid fa-wind"></i>
                    <div class="text">
                          <div class="info-wind">
                                <span class="font-medium text-2xl">0 km/h</span>
                          </div>
                          <p>Wind speed</p>
                    </div>
              </div>
        </div>
  </div>
`
  
      })
      .catch((error) => {
        console.log(error);
        
      });
  }
  input.value = ""
      // const APIkey = '499cac9ba9f936b2caddc35a15870bde';
      // const city = document.querySelector('.search-box input').value;


      // if (city =='') 
      //       return;
      // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(response => response.json()).then(json =>{
      //       const image = document.querySelector('.weather-box img')
      //       const temperature = document.querySelector('.weather-box temperature')
      //       const discription = document.querySelector('.weather-box discript')
      //       const humidity = document.querySelector('.waether-deatali .homudity')
      //       const wind = document.querySelector('.waether-deatali .wind')

            // switch (json.weater[0].main) {
            //       case 'Clear':
            //             image.src ='accets/sun.png'
            //       break;
            
            //       case 'Rain':
            //             image.src ='accets/cloud 4.png'
            //       break;
            //       case 'Mist':
            //             image.src ='accets/mistt.png'
            //       break;
            //       case 'Snow':
            //             image.src ='accets/snow.png'
            //       break;
            //       case 'Clouds':
            //             image.src ='accets/cloud 2.png'
            //       break;
            //       case 'Haze':
            //             image.src ='accets/mist.png'
            //       break;
            //       default:
            //             image.src ='accets/cloud 1.png'
                  
            // }
      // })
})