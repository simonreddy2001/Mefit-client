export const ACTION_PROFILE_FETCHING = '[profile] FETCHING'
export const ACTION_PROFILE_SET = '[profile] SET'
export const ACTION_PROFILE_ERROR = '[profile] ERROR'

export const profileFetchingAction = userId => ({
    type: ACTION_PROFILE_FETCHING,
    payload: userId
})

export const profileSetAction = profile => ({
    type: ACTION_PROFILE_SET,
    payload: profile
})

export const profileErrorAction = error => ({
    type: ACTION_PROFILE_ERROR,
    payload: error
})