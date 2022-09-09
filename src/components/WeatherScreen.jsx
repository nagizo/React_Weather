import React from 'react'



const WeatherScreen = ( props ) => {

    const { weatherData } = props;

    return (
        <> 
            <div className="weatherScreen">
                <div className="weatherInfo">
                    <h1 className="cityName">{weatherData?.name}</h1>
                    <img className="icon" src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}.png`} alt="" />
                    <p className="weatherConditions">{weatherData?.weather?.[0]?.main}</p>
                    <div className="tempGroup">
                        <p>Max-Temp：{weatherData?.main?.temp_max.toFixed()}<span className="tempGroupText">℃</span></p>
                        <p>Min-Temp：{weatherData?.main?.temp_min.toFixed()}<span className="tempGroupText">℃</span></p>
                        <p>Humidity：{weatherData?.main?.humidity}％</p>
                    </div>
                </div>

                <div className="tempInfo">
                    <p className="tempText">{weatherData?.main?.temp.toFixed()}<span>℃</span></p>
                </div>
            </div>
        </>
    )
}

export default WeatherScreen
