import axios from "axios";

export const signin = (user) => {
    // console.log(user)
    return (dispatch) => {
        // axios.get('/user?ID=12345')
        const temp = user.split(" ")
        const getRequest = "users?username=" + temp[0] + "&password=" + temp[1] 
        axios.get(getRequest, user)
            .then(response => {
                // console.log(response.data)
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