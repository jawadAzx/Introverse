import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar'
import { search } from '../../actions/searchactions'
import { follow } from '../../actions/searchactions'
import { useState } from 'react'
import { getVerse, getAllVerse } from '../../actions/verseAction'
import SearchVerse from './SearchVerse'
const SearchResults = () => {
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.searchReducers.user)
    const userData = useSelector((state) => state.signinreducers.user.username)
    const [entered, setEntered] = useState(false)
    const buttonClicked = () => {
        const query = searchResults.username + ' ' + userData
        dispatch(follow(query))
    }
    if (entered === false) {
        setEntered(true)
        dispatch(getVerse(searchResults.username))
    }
    const searchResult = useSelector(state => state.searchReducers.follow_success)

    const datum = useSelector((state) => state.verseReducers.verse.verse)
    const likes = useSelector((state) => state.verseReducers.verse.like)
    const ids = useSelector((state) => state.verseReducers.verse.id)
    const comment_count = useSelector((state) => state.verseReducers.verse.comment)
    console.log(searchResults.username, "kjsadfkjsad")
    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-body">
                                <div className="card-header bg-secondary">
                                    <div className="row">
                                        <div className="col-10">
                                            <p >{searchResults.name}</p>
                                        </div>
                                        <div className="pl-5 col-0">
                                            <button className="btn btn-primary" onClick={buttonClicked}>Follow</button>
                                            {
                                                searchResult ? <div className="alert alert-danger" role="alert">You are already following!</div> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">Birthday: {searchResults.birthday}</p>
                                <p className="card-text">Followers: {searchResults.numoffollowers}</p>
                                <p className="card-text">Following: {searchResults.numoffollowing}</p>
                                <p className="card-text">Followers: {searchResults.email}</p>
                                {datum !== undefined ?
                                    <div> {datum.map((item, index) => (
                                        <SearchVerse key={index} verse={item} likes={likes[index]} id={ids[index]} comment_count={comment_count[index]} owner={searchResults.name} />
                                    ))} </div> :
                                    <div> Loading... </div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchResults
