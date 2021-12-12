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
        setJustEntered(true)
    }
    const datum = useSelector((state) => state.verseReducers.verse.verse)

    return (
        <div>
            {datum !== undefined ?
                <div> {datum.map(item => (
                    <Verse key={item.id} verse={item} />
                ))} </div> :
                <div> Loading... </div>}
        </div>


    )
}

export default Verses
