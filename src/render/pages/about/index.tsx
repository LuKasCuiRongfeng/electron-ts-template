import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

function About() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.about)
    const add = () => {
        dispatch({
            type: "about/increment",
            payload: "fdfdf"
        })
    }
    return (
        <div>
            <h1>{state.name}</h1>
            <button onClick={add}>adddd</button>
        </div>
    )
}


export default About