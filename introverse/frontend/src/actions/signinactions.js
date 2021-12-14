import axios from "axios";

export const signin = (user, password) => {
    return (dispatch) => {
        console.log("signin action", password);
        const temp = user.split(" ")
        const getRequest = "users?username=" + temp[0] + "&password=" + password
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
export const signout = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT"
        })
    }
}

export const signinFailed = () => {
    return {
        type: "INCORRECT_CREDENTIALS",
        payload: "Incorrect Credentials"
    }
}