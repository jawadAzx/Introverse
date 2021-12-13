import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getComments } from '../../actions/commentAction'
import Comment from './Comment'
 
const Comments = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const id = location.state.num
    const [justEntered, setJustEntered] = useState(false)
    const data = useSelector((state) => state.commentReducers.comment.comments)
    console.log("data is" , data)


    if (justEntered === false) {
        dispatch(getComments(id))
        setJustEntered(true)
    }


    return (
        <div>
            {data !== undefined ?
                <div> {data.map((item, index) => (
                    <Comment key={item.id} cmt={item} />
                ))} </div> :
                <div> Loading... </div>}
        </div>
    )
}

export default Comments
