import React from 'react'
import Navbar from '../Navbar'
import { getData } from "../../actions/tablesactions"
import { useDispatch, useSelector } from 'react-redux'
import { block, unblock } from '../../actions/blockactions'
import { useState } from 'react'
const BlockPage = () => {
    const dispatch = useDispatch()
    const [fetch, setFetch] = useState(false)

    if (fetch === false) {
        dispatch(getData())
        setFetch(true)
    }
    const hmm = useSelector(state => state.tablesReducers.data.users_table)

    const inputmade = evt => {
        console.log(evt.target.id, "UWU")
        console.log(evt.target.value, "UWU")

        if (evt.target.id === "1") {
            dispatch(block(evt.target.value))
            setFetch(false)
        }
        else if (evt.target.id === "2") {
            dispatch(unblock(evt.target.value))
            setFetch(false)
        }
    }

    return (
        <div>
            <Navbar />
            {hmm !== undefined ?
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Blocked</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            hmm.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[6]}</td>
                                        <td>{item[5]}</td>
                                        {
                                            item[5] === 0 ? <button class="btn btn-primary" onClick={inputmade} id="1" value={item[0]}>Block</button>
                                                :
                                                <button class="btn btn-primary" onClick={inputmade} id="2" value={item[0]}>UnBlock</button>
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                : null
            }

        </div >
    )
}

export default BlockPage
