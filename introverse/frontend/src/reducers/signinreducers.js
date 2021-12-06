const initialData = {
    allowed: false,
    user: {}
}

const signinreducers = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'GET_DATA_SIGN_IN':
            const newdata = data.data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            return {
                ...state,
                user: finalData,
                allowed: true,
            }
        case 'INCORRECT_CREDENTIALS':
            return {
                user: {},
                allowed: false,
            }
        default:
            return state
    }

}

export default signinreducers
