import React from 'react'
import Verse from './Verse'
import { getVerse } from '../../actions/verseAction'

const Verses = () => {
    const dispatch = useDispatch()
    let user = useSelector((state) => state.signinreducers.user)
    dispatch(getVerse(user))
    let verses = useSelector((state) => state.verseReducers.verse)

    return(   
        data.map(data => (
            
        <Verse data = {data}/>
            
        ))
    
        )
}

export default Verses
