import React, { useEffect, useState, useRef } from 'react'
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import WeatherScreen from '../src/components/WeatherScreen';




const App = () => {

  const [ Available, setAvailable ] = useState(true);
  const [ positon, setPositon ] = useState({ latitude: null, longitude: null })

  //useEffectが実行されているか判定
  const FirstRef = useRef(true);
  
  //レンダリング時にGeolocationAPIが使えるか判定する
  useEffect(() => {
    FirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [Available]) //第二引数が変わる度にuseEffectが発火される

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPositon({ latitude,longitude });
    })
  }

  


  //検索地の気象情報のデータ取得
  const [fetchdata, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const textRef = useRef();
  const onSubmit = (e) => {
      e.preventDefault();
      console.log(textRef.current.value);

      const API_KEY = 'f7927c318eebf0ac033c6981f4624d57';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${textRef.current.value}&units=metric&appid=${API_KEY}`;

      fetch(url)
          .then((res) => {
              return res.json();
          })
          .then((data) => {
              console.log(data)
              setFetchData(data);
              setLoading(false);
          })
  }  

  return (
    <div>
        <header className='appForm'>
            <i className="fa-light fa-location-arrow"></i>
            <form className='searchForm' onSubmit={(e) => onSubmit(e)}>
                <SearchIcon className='searchIcon'/>
                <input className='searchInput' type='text' ref={textRef} placeholder="Search for location..."/>
            </form>
          </header>
          <WeatherScreen data={fetchdata} load={loading} />
        
    </div>
  )
  }

export default App
