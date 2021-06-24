import { ACTION_PROFILE_ERROR, ACTION_PROFILE_FETCHING, ACTION_PROFILE_SET } from "../actions/profileActions";

const initialState = {
    profileError: '',
    profileFetching: false,
    profile: []
}

export const profileReducer = (state = {...initialState}, action) => {
    switch(action.type) {

        case ACTION_PROFILE_FETCHING:
            return {
                ...state,
                profileError: '',
                profileFetching: true,
            }
        case ACTION_PROFILE_SET:
            return {
                profileError: '',
                profileFetching: false,
                profile: action.payload
            }
        case ACTION_PROFILE_ERROR:
            return {
                ...state,
                profileError: '',
                profileFetching: false
            }
        default:
            return state

    }
}