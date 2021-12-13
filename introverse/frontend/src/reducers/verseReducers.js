const initialData = {
  verse: [],

}

const verseReducers = (state = initialData, action) => {
  const data = action.payload
  switch (action.type) {
    case "GET_VERSE":
      const newdata = data.data.replace(/&quot;/g, '"')
      const finalData = JSON.parse(newdata)
      return {
        ...state,
        verse: finalData,
      };
    case "GET_ALL_VERSE":
      const nd = data.data.replace(/&quot;/g, '"')
      const fd = JSON.parse(nd)
      return {
        ...state,
        verse: fd,
      };
    case "ADD_VERSE":
      return {
        ...state,
      };
    case "DELETE_VERSE":
      return {
        ...state,
        verse: state.verse.filter((verse) => verse.id !== data),
      };

    case "ADD_LIKE":
      return {
        ...state,
      }

    case "INCREASE_COMMENT_NUMBER":
      return {
        ...state,
      }
    default:
      return state;
  }

}

export default verseReducers
