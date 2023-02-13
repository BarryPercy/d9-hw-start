export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavourites = (job)=>{
    return{
        type: 'ADD_TO_FAVOURITES',
        payload: job,
    }
    
}

export const removeFromFavourites = (id)=>{
    return{
        type: 'REMOVE_FROM_FAVOURITES',
        payload: id,
    }
}

export const getJobs = (baseEndpoint, query) =>{
    return async (dispatch, getState)=>{
        try {
            let response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
              const data = await response.json()
              console.log("data in reducer",data)
              dispatch({
                type: GET_JOBS,
                payload: data.data,
              })
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }
    }
}