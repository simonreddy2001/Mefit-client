import { RegisterAPI } from "../../components/Register/RegisterAPI"
import { ACTION_REGISTER_ATTEMPT, ACTION_REGISTER_SUCCESS, registerErrorAction, registerSuccessAction } from "../actions/registerActions"
import { sessionSetAction } from "../actions/sessionActions"

export const registerMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_REGISTER_ATTEMPT) {
        RegisterAPI.register(action.payload)
            .then(profile => {
                dispatch(registerSuccessAction(profile))
            })
            .catch(error => {
                dispatch(registerErrorAction(error.message))
            })
    }

    if (action.type === ACTION_REGISTER_SUCCESS) {
        dispatch(sessionSetAction(action.payload))
    }
    
}