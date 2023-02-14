import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from '../actions'

const initialState = {
  jobList: [],
  isLoading: true,
  isError: true,
}

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload, 
      }
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload, // which is false when the books are fetched
      }

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      }

    default:
      return state
  }
}

export default jobReducer