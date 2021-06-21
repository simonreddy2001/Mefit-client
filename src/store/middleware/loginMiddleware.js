import { Login } from "../../components/Login/Login";
import { ACTION_LOGIN_ATTEMPT, ACTION_LOGIN_SUCCESS, loginErrorAction, loginSuccessAction } from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if (action.type === ACTION_LOGIN_ATTEMPT) {
        Login.login(action.payload)
            .then(profile => {
                dispatch(loginSuccessAction(profile))
            })
            .catch(error => {
                dispatch(loginErrorAction(error.message));
            })
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
        dispatch(sessionSetAction(action.payload))
    }
}