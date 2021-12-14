import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { search } from '../../actions/searchactions'
import { Link, Redirect } from "react-router-dom";

// import { fa-search } from '@fortawesome/free-solid-svg-icons'
const Searchbar = () => {
    const dispatch = useDispatch()
    const signedIn = useSelector(state => state.signinreducers.allowed)
    const [query, setQuery] = useState("")
    const [dispatched, setDispatched] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [show, setShow] = useState(false)
    const [another, setAnother] = useState(false)
    const inputMade = evt => {

        // if (query != "") {
        //     setDispatched(false)
        //     dispatch(search(query))
        //     setQuery("")
        // }
        // setNotFound(false)
        console.log(evt.target.id)
        if (evt.target.id == "search") {
            dispatch(search(query))
            setQuery("")
            setAnother(true)

        }
        if (evt.target.id == "showresults") {
            console.log("showresults")
            setShow(true)
            setDispatched(false)
            setAnother(false)
        }
    }
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    const searchResults = useSelector(state => state.searchReducers.user)

    if (dispatched === false && searchResults !== "User Does not exist" && isEmpty(searchResults) === false && another === true) {
        setDispatched(true)
        setNotFound(false)
    }
    if (notFound === false && searchResults === 'User Does not exist') {
        setNotFound(true)
        setDispatched(false)
    }

    return (
        <div>
            <div className="row">

                {signedIn ?
                    <span>
                        <span className="col-8">
                            <span className="input-group">
                                <span className="form-outline">
                                    <input type="search"
                                        id="form1"
                                        className="form-control"
                                        placeholder="Search User"
                                        onChange={(e) => setQuery(e.target.value)}
                                        value={query}
                                    />
                                    <label className="form-label" for="form1"></label>
                                </span>
                            </span>
                        </span>


                        <span className="col-4">
                            {notFound ? <span className="alert alert-danger" role="alert"> User Does not exist</span> : null}
                            {dispatched ?
                                <button type="button" className="btn btn-primary" onClick={inputMade} id="showresults">
                                    Show Results

                                </button>

                                : <button type="button" className="btn btn-primary" onClick={inputMade} id="search">
                                    Search
                                </button>}
                        </span>
                        {show ? <Redirect to="searchresults" /> : null}

                    </span>


                    :
                    null
                }
            </div>
        </div>


    )
}

export default Searchbar
