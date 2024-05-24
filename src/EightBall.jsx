import React, { useState } from "react";


const EightBall = (answers) => {
    const [msg, setMsg] = React.useState("Think of a Question")
    const [color, setColor] = React.useState("black")
    const randomIdx = () => Math.floor(Math.random() * answers.answers.length) +1;
    // const randomChoice = answers.answers[randomIdx()]
    const showMsg = () => {
        const randomChoice = answers.answers[randomIdx()]
        setMsg(randomChoice.msg)
        setColor(randomChoice.color)
    }
    const resetBall = () => {
        setMsg("Think of a Question")
        setColor("black")
    }
    return (
        <div>
        <div className="EightBall" style={{backgroundColor: color}} onClick={showMsg}>
            <div className="EightBall-msg">
                {msg}
            </div>
            
        </div>
        <div className="EightBall-reset">
                <button onClick={resetBall}>Reset</button>
        </div>
        </div>
    )
}

export default EightBall;