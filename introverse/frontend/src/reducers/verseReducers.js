const initialData = {
    verse: []
}

const verseReducers = (state = initialData, action) => {
    switch (action.type) {
        case "GET_VERSE":
          return {
            ...state,
            verse: action.payload,
          };
        case "ADD_VERSE":
          return {
            ...state,
            verse: [...state.verse, action.payload],
          };
        case "DELETE_VERSE":
          return {
            ...state,
            verse: state.verse.filter((verse) => verse.id !== action.payload),
          };
        default:
          return state;
      }

}

export default verseReducers
