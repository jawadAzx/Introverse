import React, { useState } from 'react'
import Navbar from './Navbar'
// import DatePicker from 'react-date-picker';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { signup } from '../actions/signupactions';

const SignupPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [incorrectPassword, setincorrectPassword] = useState(false)
    const inputMade = evt => {

        if (name != "" && email != "" && password != "" && userName != "" && dateOfBirth != "") {
            if (password !== confirmPassword) {
                setincorrectPassword(true)
            }

            else {
                const zero = 0
                const data = [
                    userName,
                    name,
                    dateOfBirth,
                    zero,
                    zero,
                    zero,
                    email,
                    password,
                ]

                dispatch(signup(data))
                setName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                setUserName("")
                setDateOfBirth("")
                setincorrectPassword(false)
            }
        }

    }
    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sign up to INTROverse</h5>
                        <div className="form-group" >
                            <div className="row">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label " for="inputName"></label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        // onKeyPress={inputMade}
                                        id="inputName"></input>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label  " for="inputemail"></label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="youremail@domain.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        // onKeyPress={inputMade}
                                        id="inputemail"></input>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label  " for="inputpassword"></label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        // onKeyPress={inputMade}
                                        id="inputpassword"></input>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label  " for="inputConfirmpassword"></label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="ConfirmPassword"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                        // onKeyPress={inputMade}
                                        id="inputConfirmpassword"></input>
                                </div>
                                {
                                    incorrectPassword ? <div className="col-lg-5">
                                        <div class="alert alert-primary" role="alert">
                                            Password doesn't match
                                        </div>
                                    </div>
                                        : <div className="col-lg-5">

                                        </div>
                                }

                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label  " for="inputusername"></label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={(e) => setUserName(e.target.value)}
                                        value={userName}
                                        // onKeyPress={inputMade}
                                        id="inputusername"></input>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="form-group col-lg-5">
                                    <label className="col-form-label  " for="inputdob"></label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Enter birthday date-month-year"
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        value={dateOfBirth}
                                        // onKeyPress={inputMade}
                                        id="inputdob"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <button type="button" className="btn btn-primary btn-sm" onClick={inputMade}> Sign up
                                        {/* <Link to='/dashboard'></Link> */}

                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
