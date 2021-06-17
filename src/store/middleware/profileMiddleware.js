import { ProfileViewAPI } from "../../components/Profile/ProfileViewAPI"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { ACTION_PROFILE_FETCHING, profileErrorAction, profileSetAction } from "../actions/profileActions"
import { sessionExpiredAction } from "../actions/sessionActions"

export const profileMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_PROFILE_FETCHING) {
        ProfileViewAPI.getProfile(action.payload)
            .then(profile => {
                dispatch(profileSetAction(profile))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(profileErrorAction(message))
                }
            })
    }
}