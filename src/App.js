import React, { useEffect, useState } from 'react'
import './App.css';



const App = () => {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const API_KEY = 'f7927c318eebf0ac033c6981f4624d57'
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


  useEffect(() => {
    const Data =  async () => {}
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(lat,lon)
  });
    fetch(currentURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setCurrentData(currentData)
      });
    Data();
  }, [lat, lon])




  return (
    <div className="weatherInfo">
        <div className='cityInfo'>
            <h1 className='cityName'>tkyo</h1>
            <p className='dateInfo'>2022 June 5 Sunday</p>
            <img src='http://openweathermap.org/img/wn/10d@2x.png'/>
            <div className='detailGroup'>
                <p className='detailTemp'>最高温度:10</p>
                <p className='detailTemp'>最低温度:2</p>
                <p className='detailTemp'>湿度:3%</p>
            </div>
        </div>
        <div className='cityTemp'>
            <h2 className='temp'>3</h2> 
        </div>
    </div>
  )
}

export default App
