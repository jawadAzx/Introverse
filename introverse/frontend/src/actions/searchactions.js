import axios from "axios";

export const search = (query) => {
    return (dispatch) => {
        axios
            .get(`/users?query=${query}`)
            .then((res) => {
                dispatch({
                    type: "SEARCH_SUCCESS",
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "SEARCH_FAIL",
                    payload: err,
                });
            });
    };
}
export const follow = (query) => {
    query = query.split(" ");
    return (dispatch) => {
        axios
            .get(`/followers?follow=${query[0]}&follower=${query[1]}`)
            .then((res) => {
                dispatch({
                    type: "FOLLOWED",
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "Failed",
                    payload: err,
                });
            });
    };
}