export const ACTION_POSTS_FETCHING = '[posts] FETCHING'
export const ACTION_POSTS_SET = '[posts] SET'
export const ACTION_POSTS_FETCH_ERROR = '[posts] FETCH_ERROR'
export const ACTION_POSTS_CREATE = '[posts] CREATE'
export const ACTION_POSTS_ADD = '[posts] ADD'
export const ACTION_POSTS_CREATE_ERROR = '[posts] CREATE_ERROR'

export const exercisesFetchingAction = () => ({
    type: ACTION_POSTS_FETCHING
})

export const exercisesSetAction = posts => ({
    type: ACTION_POSTS_SET,
    payload: posts
})

export const exercisesFetchErrorAction = error => ({
    type: ACTION_POSTS_FETCH_ERROR,
    payload: error
})

export const exercisesCreateAction = post => ({
    type: ACTION_POSTS_CREATE,
    payload: post
})

export const exercisesAddAction = post => ({
    type: ACTION_POSTS_ADD,
    payload: post
})


export const exercisesCreateErrorAction = error => ({
    type: ACTION_POSTS_CREATE_ERROR,
    payload: error
})