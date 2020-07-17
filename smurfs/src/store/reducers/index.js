import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, SMURF_SUBMIT } from '../actions'

const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCH_SMURFS_SUCCESS:
            console.log('payload', action.payload)
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        default:
            return state;
    }
}