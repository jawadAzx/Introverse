import React from 'react'
import Verse from './Verse'

const Verses = () => {
    const data = ["a", "b", "C"]
    return(   
        data.map(data => (
            
        <Verse data = {data}/>
            
        ))
    
        )
}

export default Verses
