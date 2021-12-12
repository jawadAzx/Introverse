import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from "../../actions/tablesactions"
import Navbar from '../Navbar'
const Tablespage = () => {
    const dispatch = useDispatch()
    const [makeTable, setMakeTable] = useState(false)
    let counter = 0
    const inputMade = evt => {
        dispatch(getData())
        setMakeTable(true)
    }
    const hmm = useSelector(state => state.tablesReducers.data)


    return (
        <div>
            <Navbar />
            {/* <h2>{data.followers_table}</h2> */}
            <button className='btn btn-primary' onClick={inputMade}>Click me</button>

            {hmm.followers_table !== undefined && makeTable ? <div>
                <h2>User's Table</h2>

                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Number of followers</th>
                            <th scope="col">Number of following</th>
                            <th scope="col">Email</th>
                            <th scope="col">Blocked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            hmm.users_table.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                        <td>{item[6]}</td>
                                        <td>{item[5]}</td>
                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </table>
                <h2>Verses's Table</h2>

                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Id</th>
                            <th scope="col">Verse</th>
                            <th scope="col">Number of Comments</th>
                            <th scope="col">Number of Likes</th>
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
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>

                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </table>
                <h2>Followers's Table</h2>

                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Follower</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            hmm.followers_table.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>

                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </table>
                <h2>Passwords's Table</h2>

                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            hmm.passwords_table.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>

                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </table>
            </div>
                : null
            }
        </div>
    )
}

export default Tablespage
