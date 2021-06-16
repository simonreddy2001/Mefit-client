import { ACTION_PROFILE_POSTS_ERROR, ACTION_PROFILE_POSTS_FETCHING, ACTION_PROFILE_POSTS_SET } from "../actions/profilePostsActions";

const initialState = {
    profilePostsError: '',
    profilePostsFetching: false,
    profilePosts: []
}

export const profilePostsReducer = (state = {...initialState}, action) => {
    switch(action.type) {

        case ACTION_PROFILE_POSTS_FETCHING:
            return {
                ...state,
                profilePostsError: '',
                profilePostsFetching: true,
            }
        case ACTION_PROFILE_POSTS_SET:
            return {
                profilePostsError: '',
                profilePostsFetching: false,
                profilePosts: [...action.payload]
            }
        case ACTION_PROFILE_POSTS_ERROR:
            return {
                ...state,
                profilePostsError: '',
                profilePostsFetching: false
            }
        default:
            return state

    }
}