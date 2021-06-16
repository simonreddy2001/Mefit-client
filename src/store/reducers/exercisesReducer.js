import { ACTION_EXERCISES_ADD, ACTION_EXERCISES_CREATE_ERROR, ACTION_EXERCISES_FETCHING, ACTION_EXERCISES_FETCH_ERROR, ACTION_EXERCISES_SET } from "../actions/exercisesActions";

const initialState = {
    exercises: [],
    exercisesFetching: false,
    exercisesError: '',
    exercisesCreateError: ''
}

export const exercisesReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case ACTION_EXERCISES_FETCHING:
            return {
                ...state,
                exercisesFetching: true,
                exercisesError: ''
            }
        case ACTION_EXERCISES_SET:
            return {
                ...state,
                exercisesFetching: false,
                exercisesError: '',
                exercises: [...action.payload]
            }
        case ACTION_EXERCISES_FETCH_ERROR:
            return {
                ...state,
                exercisesFetching: false,
                exercisesError: action.payload
            }
        case ACTION_EXERCISES_ADD: 
            return {
                ...state,
                exercises: [action.payload, ...state.exercises]
            }
        case ACTION_EXERCISES_CREATE_ERROR:
            return {
                ...state,
                exercisesCreateError: action.payload
            }
        default:
            return state

    }
}