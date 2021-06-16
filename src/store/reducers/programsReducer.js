import { ACTION_PROGRAMS_ADD, ACTION_PROGRAMS_CREATE_ERROR, ACTION_PROGRAMS_FETCHING, ACTION_PROGRAMS_FETCH_ERROR, ACTION_PROGRAMS_SET } from "../actions/programsActions";

const initialState = {
    programs: [],
    programsFetching: false,
    programsError: '',
    programsCreateError: ''
}

export const programsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case ACTION_PROGRAMS_FETCHING:
            return {
                ...state,
                programsFetching: true,
                programsError: ''
            }
        case ACTION_PROGRAMS_SET:
            return {
                ...state,
                programsFetching: false,
                programsError: '',
                programs: [...action.payload]
            }
        case ACTION_PROGRAMS_FETCH_ERROR:
            return {
                ...state,
                programsFetching: false,
                programsError: action.payload
            }
        case ACTION_PROGRAMS_ADD: 
            return {
                ...state,
                programs: [action.payload, ...state.programs]
            }
        case ACTION_PROGRAMS_CREATE_ERROR:
            return {
                ...state,
                programsCreateError: action.payload
            }
        default:
            return state

    }
}