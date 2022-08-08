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
                        <img className="icon" src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt="" />
                    </div>
                    <div className="item3">
                        <p>{data?.main?.temp.toFixed()}<span className="cardUnitText">℃</span></p>
                    </div>
                    <div className="item4">
                        <p>{data?.main?.temp_max.toFixed()}<span className="cardUnitText">℃</span></p>
                        <p>{data?.main?.temp_min.toFixed()}<span className="cardUnitText">℃</span></p>
                        <p>{data?.main?.humidity}%</p>
                    </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default CardScreen
