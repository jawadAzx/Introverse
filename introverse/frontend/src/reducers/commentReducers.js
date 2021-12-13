const initialData = {
    comment: []
}

const commentReducers = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                ...state,
            };
        case 'GET_COMMENTS':
            const newdata = data.data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            return {
                ...state, 
                comment: finalData,
            };
        default:
            return state;
    }
}
export default commentReducers