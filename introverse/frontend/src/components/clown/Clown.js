import React from 'react'
import Navbar from '../Navbar'
import { useState } from 'react'
import axios from 'axios'
const Clown = () => {
    const api = "https://meme-api.herokuapp.com/gimme"
    const [meme, setMeme] = useState({})
    const [viewingMeme, setViewingMeme] = useState(false)
    const getMeme = async () => {
        const result = await axios(api)
        console.log(result.data)
        setMeme(result.data)
        setViewingMeme(true)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <h1>WELCOME TO THE CLOWN MODE</h1>
                        {
                            viewingMeme ? <img src={meme.url} />
                                : <div>
                                    <img src={"https://blondzombie.files.wordpress.com/2016/01/monkey-computer.jpg?w=680"} width="193" height="130" />
                                </div>
                        }
                        <button className="btn btn-primary btn-sm" onClick={getMeme}>Magic</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clown
