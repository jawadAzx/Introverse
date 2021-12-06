import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar'
import { search } from '../../actions/searchactions'
import { follow } from '../../actions/searchactions'
const SearchResults = () => {
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.searchReducers.user)
    const userData = useSelector((state) => state.signinreducers.user.username)
    const buttonClicked = () => {
        const query = searchResults.username + ' ' + userData
        dispatch(follow(query))
        console.log(query)
    }
    dispatch(search(searchResults.username))
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
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">Birthday: {searchResults.birthday}</p>
                                <p className="card-text">Followers: {searchResults.numoffollowers}</p>
                                <p className="card-text">Following: {searchResults.numoffollowing}</p>
                                <p className="card-text">Followers: {searchResults.email}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchResults
