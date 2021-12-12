import React from 'react'
import { useState } from 'react'
import Verses from './Verses'
import { useSelector } from 'react-redux'
import { likeVerse } from '../../actions/verseAction'
import { useDispatch } from 'react-redux'
import { getVerse } from '../../actions/verseAction'
import { deleteVerse } from '../../actions/verseAction'
const Verse = ({ verse, id, likes, user }) => {
    const dispatch = useDispatch()
    const [print, setPrint] = useState("")
    const [show, setShow] = useState(false)
    const [anotherBool, setAnotherBool] = useState(false)
    const userData = useSelector((state) => state.signinreducers.user)
    const [likeisClick, setLikeisClick] = useState(false);
    const [commentisClick, setCommentisClick] = useState(false);

    const likeClicked = (e) => {
        e.preventDefault();
        setLikeisClick(true);
    }
    if (verse !== undefined && anotherBool === false) {
        setPrint(verse)
        setShow(true)
        setAnotherBool(true)
    }


    const inputmade = evt => {
        if (evt.target.id === "like") {
            dispatch(likeVerse(id))
            dispatch(getVerse(user))
            setLikeisClick(false)
        }
        else if (evt.target.id === "comment") {
            console.log("comment")
        }
        else if (evt.target.id === "delete") {
            dispatch(deleteVerse(user, id))
            dispatch(getVerse(user))
        }
    }
    return (
        <div>
            {show ? <div>
                <div className="card mb-3" style={{ width: '20rem' }}>
                    <div className="card-header">{userData.username} said
                        <spam className="float-right">
                            <button type="button" class="btn btn-info btn-sm " onClick={inputmade} id="like" >Like</button>
                            <button type="button" class="ml-2 btn btn-info btn-sm " onClick={inputmade} id="comment">Comment</button>
                            <button type="button" class="ml-2 btn btn-info btn-sm " onClick={inputmade} id="delete">Delete</button>
                        </spam>

                    </div>
                    <div className="card-body">
                        {/* <h4 className="card-title">Verse</h4> */}
                        <p className="card-text">{print}</p>
                        <p className='card-text'>likes {likes}</p>
                    </div>
                </div>
            </div> : <div>   </div>}
        </div>

    )
}


export default Verse
