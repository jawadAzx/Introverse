import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-light bg-secondary">
                <span className="navbar-brand mb-0 ">
                    <h3>
                        <Link to='/'>

                            INTRO
                            <small className="text-muted"> verse</small>
                        </Link>

                    </h3>
                </span>
            </nav>
        </div >
    )
}

export default Navbar
