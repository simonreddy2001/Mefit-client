import { ACTION_POSTS_ADD, ACTION_POSTS_CREATE_ERROR, ACTION_POSTS_FETCHING, ACTION_POSTS_FETCH_ERROR, ACTION_POSTS_SET } from "../actions/exercisesActions";

const initialState = {
    exercises: [],
    exercisesFetching: false,
    exercisesError: '',
    exercisesCreateError: ''
}

export const exercisesReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case ACTION_POSTS_FETCHING:
            return {
                ...state,
                exercisesFetching: true,
                exercisesError: ''
            }
        case ACTION_POSTS_SET:
            return {
                ...state,
                exercisesFetching: false,
                exercisesError: '',
                exercises: [...action.payload]
            }
        case ACTION_POSTS_FETCH_ERROR:
            return {
                ...state,
                exercisesFetching: false,
                exercisesError: action.payload
            }
        case ACTION_POSTS_ADD: 
            return {
                ...state,
                exercises: [action.payload, ...state.posts]
            }
        case ACTION_POSTS_CREATE_ERROR:
            return {
                ...state,
                exercisesCreateError: action.payload
            }
        default:
            return state

    }
}