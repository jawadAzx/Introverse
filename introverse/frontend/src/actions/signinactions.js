import axios from "axios";

export const signin = (user) => {
    return (dispatch) => {
        const temp = user.split(" ")
        const getRequest = "users?username=" + temp[0] + "&password=" + temp[1] 
        axios.get(getRequest, user)
            .then(response => {
                dispatch({
                    type: "GET_DATA_SIGN_IN",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const signinFailed = () => {
    return {
        type: "INCORRECT_CREDENTIALS",
        payload: "Incorrect Credentials"
    }
}