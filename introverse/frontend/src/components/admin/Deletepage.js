import React from 'react'
import Navbar from '../Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { getData } from "../../actions/tablesactions"
import { deleteVerse } from '../../actions/verseAction'

const Deletepage = () => {
    const dispatch = useDispatch()
    const hmm = useSelector(state => state.tablesReducers.data)
    const [getD, setGetD] = useState(false)
    if (getD === false) {
        dispatch(getData())
        setGetD(true)
    }
    const inputmade = evt => {
        console.log(evt.target.value)
        console.log(evt.target.id)
        dispatch(deleteVerse(evt.target.value, evt.target.id))
        setGetD(false)
        dispatch(getData())

    }
    return (
        <div>
            <Navbar />
            {hmm.verses_table !== undefined && hmm.verses_table.length != 0 ?
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Id</th>
                            <th scope="col">Verse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            hmm.verses_table.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <button class="btn btn-primary" onClick={inputmade} id={item[1]} value={item[0]}>Delete Verses</button>


                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </table>
                :
                <div>
                    <h1>No Verses</h1>
                </div>
            }


        </div >
    )
}

export default Deletepage
