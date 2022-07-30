import React from 'react'

const CardScreen = ( props ) => {

    const { forecasWeatherData } = props;
    

    return (
        <>
        <div className="cardGroup">
            {forecasWeatherData?.map((data) => ( 
            <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">{data?.dt_txt}</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>{data?.main?.temp.toFixed()}</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>{data?.main?.temp_max.toFixed()}<button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button></p>
                        <p>{data?.main?.temp_min.toFixed()}<button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button></p>
                        <p>{data?.main?.humidity}%</p>
                    </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default CardScreen
