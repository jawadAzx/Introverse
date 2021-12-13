const initialData = {
    data: {},
}
const tablesReducer = (state = initialData, action) => {

    switch (action.type) {

        case 'GET_TABLES':
            const data = action.payload
            const newdata = data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            return {
                ...state,
                data: finalData,
            }
        default:
            return state
    }
}
export default tablesReducer