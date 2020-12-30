import React from "react";
import styled from 'styled-components';

const Display = ({weather}) => {

    if(weather.current){
    return(
        <Wrapper>
            <h1 className="head">Weather Around You</h1>
            <img alt="Current Weather" src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} />
            <h3 className="description">{weather.current.weather[0].description.toUpperCase()}</h3>
            <h3>{weather.current.temp.toString().substring(0,2)}&#176;F</h3>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Windspeed: {weather.current.wind_speed} MPH</p>
            <p>UV Index: {weather.current.uvi}</p>
        </Wrapper>
    )
    }
    else{
        return(
        <Wrapper>
            <h1 className="head">Get The Weather Near You Fast!!</h1>
        </Wrapper>
        )
    }

}

const Wrapper = styled.div`
display: grid;
place-items: center;
margin-bottom: 1rem;

h1 {
    color: white;
}

.description {
    color: lightsteelblue
}
`;

export default Display