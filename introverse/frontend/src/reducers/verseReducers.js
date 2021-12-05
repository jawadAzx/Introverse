const initialData = {
  verse: [],
}

const verseReducers = (state = initialData, action) => {
  const data = action.payload
  switch (action.type) {
    case "GET_VERSE":
      console.log(data)
      const newdata = data.data.replace(/&quot;/g, '"')
      const finalData = JSON.parse(newdata)
      return {
        ...state,
        verse: finalData,
      };
    case "ADD_VERSE":
      return {
        ...state,
        // verse: [state.verse.verses, data],
      };
    case "DELETE_VERSE":
      return {
        ...state,
        verse: state.verse.filter((verse) => verse.id !== data),
      };
    default:
      return state;
  }

}

export default verseReducers
