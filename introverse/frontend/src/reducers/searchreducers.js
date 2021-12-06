const initialData = {
    user: {},
}

const searchReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            const data = action.payload
            const newdata = data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            // console.log(finalData)
            return {
                ...state,
                user: finalData,
            }
        case 'SEARCH_FAIL':
            return {
                ...state,
                user: {},
            }
        default:
            return state
    }
}
export default searchReducers