import axios from 'axios'

//action suite

//ACTION TYPES
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

//ACTION CREATORS
export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START})

        axios
            .get('http://localhost:3333/smurfs/')
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => console.log(err))
            
    }
}