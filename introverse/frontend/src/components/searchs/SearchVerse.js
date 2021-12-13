import React from 'react'
import { useState } from 'react'

const SearchVerse = ({ verse, likes, comment_count, owner }) => {
    const [show, setShow] = useState(true)
    return (
        <div>
            {show ? <div>
                <div className="card mb-3" style={{ width: '20rem' }}>
                    <div className="card-header">{owner} said </div>
                    <div className="card-body">
                        <p className="card-text">{verse}</p>
                        <p className='card-text'>likes {likes}</p>
                        <p className='card-text'>comments {comment_count}</p>
                    </div>
                </div>
            </div> : <div>   </div>}
        </div>
    )
}

export default SearchVerse
