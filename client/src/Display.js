import React from "react";
import styled from 'styled-components';
import moment from "moment";
import ThreeDay from "./ThreeDay";

const Display = ({weather, showCurrent, showThreeDay}) => {

    if(weather.current && showCurrent){
    return(
        <Wrapper>
            <h1>Current Weather</h1>
            <h1>{moment().format("MMM " + "D " + "YYYY")}</h1>
            <img alt="Current Weather" src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} />
            <h3 className="description">{weather.current.weather[0].description.toUpperCase()}</h3>
            <h3>{weather.current.temp.toString().substring(0,2)}&#176;F</h3>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Windspeed: {weather.current.wind_speed} MPH</p>
            <p>UV Index: {weather.current.uvi}</p>
        </Wrapper>
    )
    }
    else if(weather.daily && showThreeDay){
        let threeDay = weather.daily.slice(1, 4);
        let index = 0;
        return(
        <Wrapper className="threeDay">
            <h1>Three Day Forecast</h1>
            {threeDay.map((daily) => {
                index++
                return <ThreeDay key={`day ${index}`} {...daily} index={index}></ThreeDay>
            })}
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
.threeDay {
    display: grid;
}

h1 {
    color: white;
}

.description {
    color: lightsteelblue
}
`;

export default Display