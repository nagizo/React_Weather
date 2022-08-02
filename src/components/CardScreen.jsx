import React from 'react'

const CardScreen = ( props ) => {

    const { forecasWeatherData } = props;
    

    
    
    return (
        <>
        <div className="cardGroup">
            
            {forecasWeatherData?.map((data, index) => ( 
            <div key={index} className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">{new Date(data.dt * 1000).toLocaleTimeString(["en-IN"], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div className="item2">
                        <span className="icon">☀️</span>
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