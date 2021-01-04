import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const ThreeDay = ({weather, temp, humidity, wind_speed, index}) => {

  let date = moment().add(index, "days").format("MMM " + "D, " + "YYYY")

  return (
    <Wrapper>
        <h1>{date}</h1>
        <img alt="Current Weather" src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} />
        <h3 className="description">{weather[0].description.toUpperCase()}</h3>
        <p>{temp.day.toString().substring(0,2)}&#176;F</p>
        <p>{humidity}%</p>
        <p>Windspeed: {wind_speed} MPH</p>
      </Wrapper>
  )
};

const Wrapper = styled.div`
display: inline-grid;
`;

export default ThreeDay;