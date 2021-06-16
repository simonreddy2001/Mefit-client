import { combineReducers } from "redux";
import { ACTION_SESSION_CLEAR } from "../actions/sessionActions";
import { loginReducer } from "./loginReducer";
import { exercisesReducer } from "./exercisesReducer";
import { workoutsReducer } from "./workoutsReducer";
import { programsReducer } from "./programsReducer";
import { profilePostsReducer } from "./profilePostsReducer";
import { registerReducer } from "./registerReducer";
import { sessionReducer } from "./sessionReducer";

const appReducer = combineReducers({
    loginReducer,
    sessionReducer,
    exercisesReducer,
    workoutsReducer,
    programsReducer,
    registerReducer,
    profilePostsReducer
})

const rootReducer = (state, action) => {
    if (action.type === ACTION_SESSION_CLEAR) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer