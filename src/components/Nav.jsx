import React from 'react'
import RoomIcon from '@mui/icons-material/Room';



const Nav = ( props ) => {
    const { onClick, onChange, text, onSubmit } = props;

    
    return (
        <>
        <nav>
            <h2>ReactWeather</h2>
            <div className="formGroup">
                <RoomIcon className="roomIcon" onClick={onClick}/>
                <form className="search_box" onSubmit={onSubmit}>
                    <input onChange={onChange} text={text} placeholder="Search for location..."></input>
                </form>
            </div>
        </nav>
        </>
    )
}
export default Nav