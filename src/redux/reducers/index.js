const initialState = {
    favourites: {
      jobs: [],
    },
  }

  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVOURITES':
        return {
          ...state, 
          favourites: {
            ...state.favourites,
            jobs: [...state.favourites.jobs, action.payload],
            
          },
        }
  
      case 'REMOVE_FROM_FAVOURITES':
        return {
          ...state,
          favourites: {
            ...state.favourites,
            jobs: state.favourites.jobs.filter((jobs) => jobs._id !== action.payload),
          },
        }
  
      default:
        return state
    }
  }
  
  export default mainReducer
  