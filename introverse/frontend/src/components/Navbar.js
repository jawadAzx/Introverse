import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Searchbar from './searchs/Searchbar'
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../actions/signinactions'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
const Navbar = () => {
    const dispatch = useDispatch()
    const inf = useSelector(state => state.signinreducers.allowed)
    const [signoutPassed, setsignoutPassed] = useState(false)
    const inputmade = (evt) => {
        dispatch(signout())
        setsignoutPassed(true)
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-secondary">
                <span className="navbar-brand mb-0 ">
                    <div className="row">
                        <div className="col-8">
                            <h3>
                                {inf ?
                                    <Link to="/dashboard">Intro <small className="text-muted"> verse</small>
                                    </Link> :
                                    <Link to="/">Intro<small className="text-muted"> verse </small>
                                    </Link>
                                }
                            </h3>
                        </div>
                        <div className=" ml-100 col-sm-4">
                            <Searchbar />
                        </div>
                        {inf ?
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <button className="btn btn-primary" onClick={inputmade}>Sign Out</button>
                                    </div>
                                </div>
                            </div>
                            :
                            null}
                        {signoutPassed ? <Redirect to="/" /> : null}

                    </div>
                </span>
            </nav>
        </div >
    )
}

export default Navbar
