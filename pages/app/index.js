import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
    const dispatch = useDispatch()
    const { message } = useSelector(state=>state.tests)
    return (
        <div>
            <h1>app</h1>
            <h1>{message}</h1>
            <input type="text" onChange={(e)=>{dispatch({type:"TEST", message:e.target.value})}} />
        </div>
    )
}
