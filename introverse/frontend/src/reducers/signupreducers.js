const initialData = {
    check: false,
}


const signupreducers = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                check: true,
            }
        
        default:
            return state
    }

}

export default signupreducers
