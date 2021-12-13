import React from 'react'
import Verse from './Verse'
import { getVerse, getAllVerse } from '../../actions/verseAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const Verses = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.signinreducers.user)
    const [justEntered, setJustEntered] = useState(false)

    if (justEntered === false) {
        dispatch(getAllVerse(userData.username))
        setJustEntered(true)
    }
    const datum = useSelector((state) => state.verseReducers.verse.verse)
    const likes = useSelector((state) => state.verseReducers.verse.like)
    const ids = useSelector((state) => state.verseReducers.verse.id)
    const comment_count = useSelector((state) => state.verseReducers.verse.comment)
    const own = useSelector((state) => state.verseReducers.verse.owner)
    console.log(datum)
    return (
        <div>
            {datum !== undefined ?
                <div> {datum.map((item, index) => (
                    <Verse key={item.id} verse={item} id={ids[index]} likes={likes[index]} comment_count={comment_count[index]} user={userData.username} owner={own[index]} />
                ))} </div> :
                <div> Loading... </div>}
        </div>


    )
}

export default Verses
