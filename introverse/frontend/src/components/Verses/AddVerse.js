import React from 'react'
import { useState } from 'react';

const AddVerse = () => {
    

   
    const [Verse, setVerse] = useState("")
    const onChange = (e) => setVerse(e);
    const onSubmit = (e) => {
        e.preventDefault();
        setVerse("")
    };
    return (
        <div className="card card-body m-4">
            {console.log("Hello there")}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Verse on your mind</label>
            <textarea className="form-control" type="text" name="body" value={Verse} onChange={(e)=> onChange(e.target.value)} ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Post Verse
            </button>
          </div>
        </form>
      </div>
    )
}

export default AddVerse
