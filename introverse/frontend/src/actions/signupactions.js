import axios from "axios"

export const signup = (user) => {
    console.log(user)
    return (dispatch) => {
        axios.post("users", user)
            .then(response => {
                dispatch({
                    type: "SIGNUP",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}