import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import { signin, signinFailed } from '../actions/signinactions';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

const LoginPage = () => {

    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [incorrectCreditials, setIncorrectCreditials] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [inCLown, setInClown] = useState(false)
    const validateData = () => {
        let userData = useSelector((state) => state.signinreducers)
        if (userData.user.username === userName && userData.user.password === password) {
            if (userData.allowed === true) {
                setIsLoggedIn(true)

            }
            else {
                setBlocked(true)
            }
            setUserName("")
            setPassword("")

        }
        else if (userData.user === "Incorrect username/password") {
            dispatch(signinFailed())
            setUserName("")
            setPassword("")
            setIncorrectCreditials(true)
        }
    }

    const inputMade = evt => {
        if (evt.target.id === "clown") {
            setInClown(true)
            setUserName("")
            setPassword("")
        }
        if (userName != "" && password != "") {
            if (userName === "admin" && password === "adminking") {
                setIsAdmin(true)
                setUserName("")
                setPassword("")
            }

            else {
                dispatch(signin(userName, password))
            }
        }
    }
    const clear = evt => {
        setUserName("")
        setPassword("")
        setIncorrectCreditials(false)
        setIsAdmin(false)
        setBlocked(false)
    }


    validateData()

    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Welcome to INTROverse</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Introduce Yourself</h6>
                        <div className="form-group" >
                            <div className="row">
                                <div className="form-group col-lg-2">
                                    <label className="col-form-label " for="inputUserName"></label>
                                    <input type="text"
                                        onClick={clear}
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={(e) => setUserName(e.target.value)}
                                        value={userName}
                                        id="inputUserName"></input>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-2">
                                    <label className="col-form-label  " for="inputpassword"></label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        id="inputpassword"></input>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary btn-sm" onClick={inputMade}>Sign in</button>
                            <button type="button" className="btn btn-primary btn-sm ml-3" onClick={inputMade} id="clown">Clown (:</button>

                            {isLoggedIn ? <Redirect to="/dashboard" /> : null}
                            {isAdmin ? <Redirect to="/admin" /> : null}
                            {inCLown ? <Redirect to="/clown" /> : null}
                            <div className="row pt-2">
                                <div className="col-lg-10">
                                    {incorrectCreditials ? <div className="alert alert-danger" role="alert">
                                        Incorrect username/password
                                    </div> : null}

                                    {blocked ? <div className="alert alert-danger" role="alert">
                                        Your account has been blocked
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to='/signup'  >Dont have an INTROverse account yet?</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default LoginPage
