import React from 'react'
import { useState } from 'react'

const Verse = ({verse}) => {

    const [Verse, setVerse] = useState([])
    return (
        <div className="card bg-secondary mb-3" style={{width: '20rem'}}>
        <div className="card-header"></div>
        <div className="card-body">
            {console.log({verse})}
            <h4 className="card-title">Verse</h4>
            <p className="card-text">{verse}</p>
        </div>
        </div>

        )
}


export default Verse
