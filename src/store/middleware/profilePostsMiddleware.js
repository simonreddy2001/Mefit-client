import { ProfilePostsAPI } from "../../components/Profile/ProfilePostsAPI"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { ACTION_PROFILE_POSTS_FETCHING, profilePostsErrorAction, profilePostsSetAction } from "../actions/profilePostsActions"
import { sessionExpiredAction } from "../actions/sessionActions"

export const profilePostsMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_PROFILE_POSTS_FETCHING) {
        ProfilePostsAPI.getProfilePosts(action.payload)
            .then(posts => {
                dispatch(profilePostsSetAction(posts))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(profilePostsErrorAction(message))
                }
            })
    }
}