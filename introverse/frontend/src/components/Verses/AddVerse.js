import React from 'react'
import { useState } from 'react';
import { postVerse } from '../../actions/verseAction';
import { useDispatch, useSelector } from 'react-redux';
import { getVerse } from '../../actions/verseAction';
import { getAllVerse } from '../../actions/verseAction';

const AddVerse = () => {


  const [callfunction, setcallfunction] = useState(false)
  const dispatch = useDispatch();
  const [verse, setVerse] = useState("")
  const [name, setName] = useState("")
  const userData = useSelector((state) => state.signinreducers.user)
  const onChange = (e) => setVerse(e);
  const onSubmit = (e) => {
    e.preventDefault();
    setcallfunction(true)
  };
  if (callfunction === true) {
    const tuple = [verse, userData.username]
    dispatch(postVerse(tuple))
    setVerse("")
    dispatch(getAllVerse(userData.username))
    dispatch(getAllVerse(userData.username))

    setcallfunction(false)
  }

  return (
    <div className="card card-body m-4">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Verse on your mind</label>
          <textarea className="form-control" type="text" name="body" value={verse} onChange={(e) => onChange(e.target.value)} ></textarea>
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
