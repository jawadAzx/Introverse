import axios from "axios"

export const postVerse = (data) => {

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

export const likeVerse = (id) => {
    return (dispatch) => {
        axios.post('verses', [id, "put1",])
            .then(response => {
                dispatch({
                    type: "ADD_LIKE",
                    payload: id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const add_comment_number = (id) => {
    return (dispatch) => {
        axios.post('verses', [id, "put2",])
            .then(response => {
                dispatch({
                    type: "INCREASE_COMMENT_NUMBER",
                    payload: id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getVerse = (name) => {
    const getRequest = "verses?method=getVerse?username=" + name

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
export const getAllVerse = (name) => {
    const getRequest = "verses?method=getAllVerse?username=" + name

    return (dispatch) => {
        axios.get(getRequest)
            .then(response => {
                dispatch({
                    type: "GET_ALL_VERSE",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const deleteVerse = (username, id) => {
    const deleteRequest = "verses?method=delete?id=" + id + "?username=" + username + ""
    return (dispatch) => {
        axios.get(deleteRequest)
            .then(response => {
                dispatch({
                    type: "DELETE_VERSE",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

