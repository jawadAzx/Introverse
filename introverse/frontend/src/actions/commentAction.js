import React from 'react'
import axios from 'axios'

export const postComment = (comment, id, username) => {
    
    return (dispatch) => {
        axios.post('comments', [comment, id, username])
            .then(response => {
                dispatch({
                    type: "ADD_COMMENT",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getComments = (id) => {
    
    const getRequest = "comments?id=" + id
    return (dispatch) => {
        axios.get(getRequest)
            .then(response => {
                dispatch({
                    type: "GET_COMMENTS",
                    payload: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}