import React, {useState, useEffect} from "react";
import axios from "axios";
import Display from "./Display";
import styled from 'styled-components';

// function scrollBackground(){
//   var x = 0;
//   setInterval(function(){
//       x-=1;
//       Wrapper.componentStyle.rules[0].replace(" background-position: 0 0;", ` background-position: ${x}px 0;`);
//       console.log(Wrapper.componentStyle.rules[0])
//   }, 5000);
// }

function App() {

  const [weather, setWeather] = useState({})

  function showWeather(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    fetch(`/api/weather/${latitude}/${longitude}`)
    .then((response) => {
      return response.json()
    })
    .then((weatherInfo) => {
      console.log(weatherInfo)
      setWeather(weatherInfo)
      let clearWeather = setInterval(() => {
        let stop = 0
       setWeather({})
       stop++
       if(stop === 1){
         clearInterval(clearWeather)
       }
     }, 15000);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // useEffect(scrollBackground)

  return (
    <Wrapper>
    <div className="container">
      <Display weather={weather}/>
      <button 
        onClick={() => navigator.geolocation.getCurrentPosition(showWeather)}
        className="btn"
        >
          Current Weather
        
        </button>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-image: url("https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");\
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
`;

export default App;
