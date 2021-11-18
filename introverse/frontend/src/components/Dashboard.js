import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
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
            {
                viewingMeme ? <img src={meme.url} />
                    : <div>
                        <h1>Dashboard is under construction, but wait you can still use the clown mode :)</h1>
                        <img src={"https://blondzombie.files.wordpress.com/2016/01/monkey-computer.jpg?w=680"} width="400px" />
                    </div>
            }
            <button className="btn btn-primary btn-sm" onClick={getMeme}>Magic</button>


        </div>
    )
}

export default Dashboard
