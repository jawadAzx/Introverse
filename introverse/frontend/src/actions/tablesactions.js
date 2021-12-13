import axios from "axios";

export const getData = () => {
    return (dispatch) => {
        axios
            .get(`/adminaccess`)
            .then(res => {
                dispatch({
                    type: "GET_TABLES",
                    payload: res.data
                    
                })
            }
            )
    }
}

