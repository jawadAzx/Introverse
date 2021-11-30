import React from 'react'
import Verse from './Verse'
import { getVerse } from '../../actions/verseAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const Verses = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.signinreducers.user)
    const [justEntered, setJustEntered] = useState(false)
    if (justEntered === false) {
        dispatch(getVerse(userData.username))
    }
    const [verse, setVerse] = useState("")


    // let user = useSelector((state) => state.signinreducers.user)
    // dispatch(getVerse(user))
    // let verses = useSelector((state) => state.verseReducers.verse)

    return (
        // data.map(data => (

        // <Verse/>

        // ))
        <div>
        </div>

    )
}

export default Verses
