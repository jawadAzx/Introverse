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
            console.log(finalData.blocked, "LOK")
            let x = true

            if (finalData.blocked === 1) {
                x = false
            }
            return {
                ...state,
                user: finalData,

                allowed: x,
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
