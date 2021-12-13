import React from 'react'
import { useState } from 'react'
import Verses from './Verses'
import { useSelector } from 'react-redux'
import { likeVerse } from '../../actions/verseAction'
import { useDispatch } from 'react-redux'
import { getVerse } from '../../actions/verseAction'
import { deleteVerse } from '../../actions/verseAction'
import { postComment } from '../../actions/commentAction'
import { add_comment_number } from '../../actions/verseAction'
import { Link, Redirect, useNavigate} from "react-router-dom";


const Verse = ({ verse, id, likes, comment_count ,user }) => {
    const dispatch = useDispatch()
    const [print, setPrint] = useState("")
    const [show, setShow] = useState(false)
    const [anotherBool, setAnotherBool] = useState(false)
    const userData = useSelector((state) => state.signinreducers.user)
    const [likeisClick, setLikeisClick] = useState(false);
    const [commentisClick, setCommentisClick] = useState(false);
    const [comment, setComment] = useState("")

    const likeClicked = (e) => {
        e.preventDefault();
        setLikeisClick(true);
    }

    const onChange = (e) => setComment(e);

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
            console.log("comment", comment)
            dispatch(postComment(comment, id, user))
            setComment("")
            dispatch(add_comment_number(id))
            dispatch(getVerse(user))

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
                        <p className='card-text'>comments {comment_count}</p>
                        <button type="button" class="btn btn-info btn-sm "> <Link to ={{pathname: '/comments', state: {num: id}}}> View Comment </Link> </button>
                        <div className = 'form-group'>
                        <label>Share your comments</label>
                        <textarea className="form-control" type="text" name="body" value={comment} onChange={(e) => onChange(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div> : <div>   </div>}
        </div>

    )
}


export default Verse
