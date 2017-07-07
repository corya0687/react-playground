import React from 'react';

const CurrentForecast = ({ forecast: { apparentTemperature, humidity, precipProbability, summary, temperature, time}}) => <div>
  <h2>CurrentForecast</h2>
  <div style={{ border: 'solid 1px black', padding: '16px', margin: '16px'}}>
    <h3> {summary} </h3>
    <p> Current Time: {time}</p>
    <p> Temperature: {Math.round(temperature)}</p>
    <p> Feels Like: {Math.round(apparentTemperature)}</p>
    <p> Chance of Percipitation: {precipProbability}</p>
    <p> Humidity: {humidity}%</p>
    <p></p>
  </div>
</div>

export default CurrentForecast
