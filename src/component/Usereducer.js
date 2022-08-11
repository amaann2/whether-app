import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1

        default:
            break;
    }
    return state;
}
const Usereducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    )
}

export default Usereducer