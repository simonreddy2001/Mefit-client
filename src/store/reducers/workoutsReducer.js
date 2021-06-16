import { ACTION_WORKOUTS_ADD, ACTION_WORKOUTS_CREATE_ERROR, ACTION_WORKOUTS_FETCHING, ACTION_WORKOUTS_FETCH_ERROR, ACTION_WORKOUTS_SET } from "../actions/workoutsActions";

const initialState = {
    workouts: [],
    workoutsFetching: false,
    workoutsError: '',
    workoutsCreateError: ''
}

export const workoutsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case ACTION_WORKOUTS_FETCHING:
            return {
                ...state,
                workoutsFetching: true,
                workoutsError: ''
            }
        case ACTION_WORKOUTS_SET:
            return {
                ...state,
                workoutsFetching: false,
                workoutsError: '',
                workouts: [...action.payload]
            }
        case ACTION_WORKOUTS_FETCH_ERROR:
            return {
                ...state,
                workoutsFetching: false,
                workoutsError: action.payload
            }
        case ACTION_WORKOUTS_ADD: 
            return {
                ...state,
                workouts: [action.payload, ...state.workouts]
            }
        case ACTION_WORKOUTS_CREATE_ERROR:
            return {
                ...state,
                workoutsCreateError: action.payload
            }
        default:
            return state

    }
}