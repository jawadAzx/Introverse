import axios from "axios"
import Verses from "../components/Verses/Verses"

export const postVerse = (data) => {
    console.log("Post Tweet", data)

    return (dispatch) => {
        axios.post('verses', data)
            .then(response => {
                dispatch({
                    type: "ADD_VERSE",
                    payload: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getVerse = (name) => {
    // console.log("in get",name)
    const getRequest = "verses?username=" + name 

    return (dispatch) => {
        axios.get(getRequest)
            .then(response => {
                dispatch({
                    type: "GET_VERSE",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const likeVerse = () => {
    console.log("Like Verse chal para 0") 
    return (dispatch) => {
        console.log("Like Verse chal para")    
        axios.post('verses', [0, "put",])
            .then(response => {
                dispatch({
                    type: "ADD_VERSE",
                    payload: id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// export const getTweet = (user) => {
//     console.log("Get Tweet" , verse)
//     getRequest = "users?username=" + temp[0] + "&id=" + 
//     return (dispatch) => {
//         axios.get(verse, user)
//             .then(response => {
//                 dispatch({
//                     type: "GET_VERSE",
//                     payload: response
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }