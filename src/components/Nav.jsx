import React from 'react'
import RoomIcon from '@mui/icons-material/Room';



const Nav = ( props ) => {
    const { onClick, onChange, text, onSubmit } = props;

    
    return (
        <>
        <nav>
            <RoomIcon className="roomIcon" onClick={onClick}/>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} text={text} placeholder="Search for location..."></input>
            </form>
           
        </nav>
        </>
    )
}
export default Nav