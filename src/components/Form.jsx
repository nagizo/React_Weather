import React from 'react'

const Form = ( props ) => {
    const { onChange, text, onSubmit } = props;
    return (
        <>
            <div className="seachInput">
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} text={text} placeholder="Search for location..."></input>
                </form>
            </div>
        </>
    )
}

export default Form
