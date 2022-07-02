import React from 'react'
import '../App.css'



const WeatherScreen = ({ data, load }) => {
    if (load) {
        return <div></div>;
      }
    return (
    <div className="weatherInfo">
        <div className='cityInfo'>
            <h1 className='cityName'>{data.name}</h1>
            <p className='dateInfo'>2022 June 5 Sunday</p>
            <img src='http://openweathermap.org/img/wn/10d@2x.png'/>
            <div className='detailGroup'>
                <p className='detailTemp'>最高温度:{data.main.temp_max.toFixed()} ℃/℉</p>
                <p className='detailTemp'>最低温度:{data.main.temp_min.toFixed()} ℃/℉</p>
                <p className='detailTemp'>湿度:{data.main.humidity}%</p>
            </div>
        </div>
        <div className='cityTemp'>
            <h2 className='temp'>{(data.main.temp).toFixed()}<button className="changeBtn">℃/℉</button></h2> 
        </div>
    </div>
    )
}

export default WeatherScreen




