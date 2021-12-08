const initialData = {
    user: {},
    follow_success : false
}

const searchReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            const data = action.payload
            const newdata = data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            console.log(finalData,"FFFFFFFFFF")
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
        case 'FOLLOWED':
            const d1 = action.payload
            const newd1 = d1.replace(/&quot;/g, '"')
            const finald1 = JSON.parse(newd1)
            console.log(finald1,"followed")

            return {
                ...state,
                // user: {},
                follow_success: finald1.status,
                
            }
        default:
            return state
    }
}
export default searchReducers