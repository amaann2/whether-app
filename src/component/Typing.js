import React, { useState, useEffect } from 'react'

import { generate } from '../utils/word'

const Typing = () => {
    const [word, setword] = useState([])
    const [inputvalue, setinputvalue] = useState('')
    const [countdown , setcountdown] = useState(5)
    useEffect(() => {
        setword(generate())
    }, [])
    // setTimeout(() => {
    //     setcountdown(countdown-1)
    // }, 1000);
    let interval =setInterval(() => {
        setcountdown(countdown-1)
    }, 1000);
    
    if (countdown === 0) {
        clearInterval(interval);
    }
    return (
        <>
            <div className="container">
                {/* {word.map((words,i) => {
                    <>
                    <span>{words}</span>
                    <span> </span>
                    </>
                })} */}
                <p>{countdown}</p>
                <input type="text"  onChange={(e)=>setinputvalue(e.target.value)}/>
                <p>{inputvalue.split("")}</p>
                <p>{word}</p>
                {/* <p>{inputvalue.split("")=== word ? "corerct":"incorect"}</p> */}
                
            </div>
        </>
    )
}

export default Typing