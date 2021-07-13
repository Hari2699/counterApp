import React, { useState } from 'react'
import Button from './Button'
import "./style.css"

const App = ({buttonText, buttonColor, handleOnClick}) => {
    const [score, setScore] = useState(0)
    return (
        <React.Fragment>
            <div className="Container">
            <div className="Header">
                <h1>Day 2</h1>
                <h3>Assignment - Counter App</h3>
                <p>The value of count is <br /><span>{score}</span></p>
            </div>
            
            <div className="btn">
                <Button buttonText="Increment" buttonColor="#bbff00" 
                    handleOnClick={() => (score<25) ? setScore(score+1) : '' }
                />
                <Button buttonText="Decrement" buttonColor="#4F447A" 
                    handleOnClick={() => (score > 0) ? setScore(score-1) : ""}
                />
                <Button buttonText="Reset" buttonColor="#ff7300"
                    handleOnClick={() => {setScore(0)}}
                />
            </div>
            
            </div>
            
        </React.Fragment>
    )
}

export default App
