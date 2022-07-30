import React from 'react'


const WeatherScreen = ( props ) => {
    const { weatherData } = props;
    

    return (
        <>
            <div className="weatherScreen">
                <div className="weatherInfo">
                    <h1 className="cityName">{weatherData?.name}</h1>
                    <span className="icon">☀️</span>
                    <div className="tempGroup">
                        <p>Max-Temp：{weatherData?.main?.temp_max.toFixed()}<button className="unitBtn"><span className="unitColor">℃</span>/℉</button></p>
                        <p>Min-Temp：{weatherData?.main?.temp_min.toFixed()}<button className="unitBtn"><span className="unitColor">℃</span>/℉</button></p>
                        <p>Humidity：{weatherData?.main?.humidity}％</p>
                    </div>
                </div>

                <div className="tempInfo">
                    <p className="tempText">{weatherData?.main?.temp.toFixed()}</p>
                    <div className="unitBtnGroup">
                        <button className="unitBtn"><span className="unitColor">℃</span>/℉</button>
                        <button className="unitBtn"><span className="unitColor">℉</span>/℃</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherScreen
