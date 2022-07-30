import React,  { useEffect, useState } from "react"
import "./style.css" 
import WeatherScreen from "./components/WeatherScreen"
import Form from "./components/Form"
import CardScreen from "./components/CardScreen"



const App = () => {
    
     
    const [data, setData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [text, setText] = useState("");
    

    const MY_API_KEY = "f7927c318eebf0ac033c6981f4624d57";
    const latAndoLongURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${MY_API_KEY}`;
    const forecastLatLongURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=6&appid=${MY_API_KEY}`;
    const cityNameURL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${MY_API_KEY}`;
    const forecastCityNameURL = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&cnt=6&appid=${MY_API_KEY}`;


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

            await fetch(forecastLatLongURL)
                .then(response => {
                    return response.json();
                })
                .then(forecasWeatherData => {
                    console.log(forecasWeatherData.list)
                    setForecastData(forecasWeatherData.list)
                })
        }
        processingAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lat, long])


    const changeSearchText = (e) => {
        setText(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setText("")
    
        await fetch(cityNameURL)
            .then(response => {
                return response.json();
            })
            .then(weatherData => {
                setData(weatherData);
            })

        await fetch(forecastCityNameURL)
            .then(response => {
                return response.json();
            })
            .then(forecasWeatherData => {
                console.log(forecasWeatherData.list)
                setForecastData(forecasWeatherData.list)
            })
    }
    

    return (
        <>
            <Form onChange={changeSearchText} text={text} onSubmit={onSubmit}/>
            <WeatherScreen weatherData={data}/>
            <CardScreen forecasWeatherData={forecastData}/>
        </>
    )

}

export default App
