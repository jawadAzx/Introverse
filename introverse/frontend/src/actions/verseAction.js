import axios from "axios"

export const postVerse = (verse) => {
    console.log("Post Tweet",verse)
    return (dispatch) => {
        axios.post("verses", verse)
            .then(response => {
                dispatch({
                    type: "ADD_VERSE",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getVerse = (verse) => {
    console.log("Post Tweet",verse)
    return (dispatch) => {
        axios.get("verses", verse)
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