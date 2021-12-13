import React from 'react'

const Comment = ({cmt}) => {
    return (
        <div className="card mb-3" style={{ width: '20rem' }}>
            <div className="card-body">
                <p className="card-text">{cmt}</p>
            </div>
        </div>
    )
}

export default Comment
