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

    const validateData = () => {
        let userData = useSelector((state) => state.signinreducers.user)

        if (userData.username === userName && userData.password === password) {
            setIsLoggedIn(true)
            setUserName("")
            setPassword("")
        }
        else if (userData === "Incorrect username/password") {

            dispatch(signinFailed())
            setUserName("")
            setPassword("")
            setIncorrectCreditials(true)

        }
    }

    const inputMade = evt => {
        
        if (userName != "" && password != "") {

            dispatch(signin(userName, password))
        }
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
                                        onClick={() => setIncorrectCreditials(false)}
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
                            {isLoggedIn ? <Redirect to="/dashboard" /> : null}
                            <div className="row pt-2">
                                <div className="col-lg-10">
                                    {incorrectCreditials ? <div className="alert alert-danger" role="alert">
                                        Incorrect username/password
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
