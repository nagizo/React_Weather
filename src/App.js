import React,  { useEffect, useState } from "react"
import "./style.css" 
import WeatherScreen from "./components/WeatherScreen"
import Form from "./components/Form"

const App = () => {
     
    const [data, setData] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [text, setText] = useState("");
    

    const MY_API_KEY = "f7927c318eebf0ac033c6981f4624d57";
    const latAndoLongURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${MY_API_KEY}`;
    const cityNameURL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${MY_API_KEY}`

    //現在地の天気情報を取得
    useEffect(() => {
        const processingAPI = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            });
        
            await fetch(latAndoLongURL)
                .then(response => {
                    return response.json();
                })
                .then(weatherData => {
                    setData(weatherData);
                })
        }
        processingAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lat, long])


    const changeSearchText = (e) => {
        setText(e.target.value);
    }

    const onSubmit = async (e) => {
        if ( text === "") return;
        e.preventDefault();
        setText("")
    
        await fetch(cityNameURL)
            .then(response => {
                return response.json();
            })
            .then(weatherData => {
                setData(weatherData);
            })
    }
    

    return (
        <>
            <Form onChange={changeSearchText} text={text} onSubmit={onSubmit}/>
            <WeatherScreen weatherData={data}/>
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
