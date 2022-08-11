import React, { useRef, useState } from 'react'
import { FaAccessibleIcon } from "react-icons/fa";

const Uncontrolledform = () => {
    const luckyname = useRef(null)
    const [show, setshow] = useState(false)
    const submit = (e) => {
        e.preventDefault();
       const  name=luckyname.current.value
       name === ""? alert('plx fill the data') : setshow(true)

    }
    return (
        <div>
            <form action='noaction' onSubmit={submit}>
                <label htmlFor='luckyname'>Enter your lucky name</label>
                <input type='text' id='luckyname' name='luckyname' ref={luckyname}></input>
                <button >submit<FaAccessibleIcon/></button>
            </form>
            <p>{show? `your lucky name is ${luckyname.current.value}`:""}</p>
        </div>
    )
}

export default Uncontrolledform;