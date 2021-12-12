import axios from 'axios';

export const block = (user) => {
    return (dispatch) => {
        const Request = "/adminaccess?username=" + user + "&query=" + "block";

        axios.get(Request)
            .then(() => {
                dispatch({ type: 'BLOCK_USER', user });
            });
    };
}

export const unblock = (user) => {
    return (dispatch) => {
        const Request = "/adminaccess?username=" + user + "&query=" + "unblock";

        axios.get(Request)
            .then(() => {
                dispatch({ type: 'unBLOCK_USER', user });
            });
    };
}
