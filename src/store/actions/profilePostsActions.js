export const ACTION_PROFILE_POSTS_FETCHING = '[profile-posts] FETCHING'
export const ACTION_PROFILE_POSTS_SET = '[profile-posts] SET'
export const ACTION_PROFILE_POSTS_ERROR = '[profile-posts] ERROR'

export const profilePostsFetchingAction = userId => ({
    type: ACTION_PROFILE_POSTS_FETCHING,
    payload: userId
})

export const profilePostsSetAction = posts => ({
    type: ACTION_PROFILE_POSTS_SET,
    payload: posts
})

export const profilePostsErrorAction = error => ({
    type: ACTION_PROFILE_POSTS_ERROR,
    payload: error
})