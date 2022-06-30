import React, { useState, useRef } from 'react'
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import WeatherScreen from './WeatherScreen';


const From = () => {

    const [fetchdata, setFetchData] = useState([]);
    const [loading, setLoading] = useState(true);

    const ref = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.value);

        const API_KEY = 'f7927c318eebf0ac033c6981f4624d57';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ref.current.value}&units=metric&appid=${API_KEY}`;

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
        <div className="App">
            <header className='appForm'>
                <i className="fa-light fa-location-arrow"></i>
                <form className='searchForm' onSubmit={(e) => onSubmit(e)}>
                    <SearchIcon className='searchIcon'/>
                    <input className='searchInput' type='text' ref={ref} placeholder="Search for location..."/>
                </form>
                <WeatherScreen data={fetchdata} load={loading} />
            </header>
        </div>
    )
}
export default From
