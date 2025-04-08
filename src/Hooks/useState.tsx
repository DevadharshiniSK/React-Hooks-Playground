import { useState } from "react"

const UseStateDemo = () => {

    const [ count, setCount ]   =   useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default UseStateDemo
