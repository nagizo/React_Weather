import React from 'react'
import "./style.css" 

const App = () => {

    const MY_API_KEY = "f7927c318eebf0ac033c6981f4624d57";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    //現在地の天気情報を取得
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat,long)
    })

    

    return (
        <>
            <div className="seachInput">
                <input placeholder="Search for location..."></input>
            </div>

            <div className="weatherScreen">
                <div className="weatherInfo">
                    <h1 className="cityName">London</h1>
                    <p className="dateInfo">2022 June 5 Sunday</p>
                    <span className="icon">☀️</span>
                    <div className="tempGroup">
                        <p>Max-Temp：１０</p>
                        <p>Min-Temp</p>
                        <p>Humidity：１０％</p>
                    </div>
                </div>

                <div className="tempInfo">
                    <p className="tempText">10</p>
                    <div className="unitBtnGroup">
                        <button className="unitBtn"><span className="unitColor">℃</span>/℉</button>
                        <button className="unitBtn"><span className="unitColor">℉</span>/℃</button>
                    </div>
                </div>
            </div>
            
            <div className="cardGroup">

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/16 (月)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/17(火)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/18(水)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/19(木)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/20(金)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>

                <div className="forecastCard">
                    <div className="item1">
                        <p className="forecastDate">7/21(土)</p>
                    </div>
                    <div className="item2">
                        <p className="icon">☀️</p>
                    </div>
                    <div className="item3">
                        <p>10</p>
                        <button className="forecasUnitBtn"><span className="unitColor">℃</span>/℉</button>
                    </div>
                    <div className="item4">
                        <p>10℃/℉</p>
                        <p>10℃/℉</p>
                        <p>10％</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default App
