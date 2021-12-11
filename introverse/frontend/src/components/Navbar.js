import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Searchbar from './searchs/Searchbar'
const Navbar = () => {

    return (
        <div>

            <nav className="navbar navbar-light bg-secondary">
                <span className="navbar-brand mb-0 ">
                    <div className="row">
                        <div className="col-8">
                            <h3>
                                <Link to='/'>

                                    INTRO
                                    <small className="text-muted"> verse</small>
                                </Link>
                            </h3>
                        </div>
                        <div className=" ml-100 col-sm-4">
                            <Searchbar />
                        </div>
                    </div>

                </span>
            </nav>
        </div >
    )
}

export default Navbar
