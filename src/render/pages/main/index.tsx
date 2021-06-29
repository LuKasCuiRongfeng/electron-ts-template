import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { createWin, sendMsg } from '../../ipc/utils'
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
        createWin({
            data: {
                type: "about/increment",
                payload: "hello world"
            },
            createWinOpts: {
                key: "about",
                openDevTools: true,
                browserWindowConstructorOptions: {
                    title: "about"
                }
            }
        })
    }

    const changeAbout = () => {
        sendMsg("about", {
            type: "about/increment",
            payload: "add about"
        })
    }
    return (
        <div>
            <h1 className="h1">{app.value}</h1>
            <button onClick={add}>dd</button>
            <button onClick={openWin}>open new win</button>
            <button onClick={changeAbout}>change about</button>
        </div>
    )
}


export default Main