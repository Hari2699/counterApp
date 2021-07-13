import React from 'react'
import "./style.css"

const Button = ({buttonText, buttonColor, handleOnClick}) => {
    return (
        <div>
            <button onClick={handleOnClick} style={{ backgroundColor: buttonColor }}>{buttonText}</button>
        </div>
    )
}

export default Button
