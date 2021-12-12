import React from 'react'
import Navbar from '../Navbar'
import { Link, Redirect } from "react-router-dom";
import { useState } from 'react';


const Adminpage = () => {
    const [tables, setTables] = useState(false);
    const [restrict, setRestrict] = useState(false);
    const [dell, setDell] = useState(false);
    const tab = evt => {

        if (tables === false) {
            setTables(true)
        }
    }
    const rest = evt => {

        if (restrict === false) {
            setRestrict(true)
        }
    }
    const del = evt => {
        if (dell == false) {
            setDell(true)
        }
    }


    console.log(tables)
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 pt-5'>
                        {/* <h1>Admin Page</h1> */}
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Admin access privelege #1</h5>
                                <button type="button" className="btn btn-primary" onClick={tab}>View Tables :)</button>
                                {tables ? <Redirect to='/tables' /> : null}
                            </div>
                        </div>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Admin access privelege #2</h5>
                                <button type="button" className="btn btn-primary" onClick={rest}>Restrict User :)</button>
                                {restrict ? <Redirect to='/block' /> : null}
                            </div>
                        </div>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Admin access privelege #2</h5>
                                <button type="button" className="btn btn-primary" onClick={del} >Delete Verse :)</button>
                                {dell ? <Redirect to='/deleteverse' /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminpage
