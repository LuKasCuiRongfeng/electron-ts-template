import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addBroswerView } from '../../ipc/utils'

function About() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.about)
    const add = () => {
        dispatch({
            type: "about/increment",
            payload: "fdfdf"
        })
    }
    const addView = () => {
        addBroswerView("about", "https://www.bilibili.com", {
            x: 0,
            y: 0,
            width: 500,
            height: 500
        })
    }
    return (
        <div>
            <h1>{state.name}</h1>
            <button onClick={add}>adddd</button>
            <button onClick={addView}>add view</button>
        </div>
    )
}


export default About