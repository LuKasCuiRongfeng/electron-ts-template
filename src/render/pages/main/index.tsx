import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { createWin } from '../../utils'
import './index.css'

function Main() {
    const dispatch = useAppDispatch()
    const app = useAppSelector(state => state.app)
    const add = () => {
        dispatch({
            type: "app/increment",
            payload: 23
        })
    }
    const openWin = () => {
        createWin("about", {
            data: {
                type: "about/increment",
                payload: "hello world"
            }
        })
    }
    return (
        <div>
            <h1 className="h1">{app.value}</h1>
            <button onClick={add}>addddd</button>
            <button onClick={openWin}>open new win</button>
        </div>
    )
}


export default Main