export const ACTION_WORKOUTS_FETCHING = '[workouts] FETCHING'
export const ACTION_WORKOUTS_SET = '[workouts] SET'
export const ACTION_WORKOUTS_FETCH_ERROR = '[workouts] FETCH_ERROR'
export const ACTION_WORKOUTS_CREATE = '[workouts] CREATE'
export const ACTION_WORKOUTS_ADD = '[workouts] ADD'
export const ACTION_WORKOUTS_CREATE_ERROR = '[workouts] CREATE_ERROR'

export const workoutsFetchingAction = () => ({
    type: ACTION_WORKOUTS_FETCHING
})

export const workoutsSetAction = workouts => ({
    type: ACTION_WORKOUTS_SET,
    payload: workouts
})

export const workoutsFetchErrorAction = error => ({
    type: ACTION_WORKOUTS_FETCH_ERROR,
    payload: error
})

export const workoutsCreateAction = workout => ({
    type: ACTION_WORKOUTS_CREATE,
    payload: workout
})

export const workoutsAddAction = workout => ({
    type: ACTION_WORKOUTS_ADD,
    payload: workout
})


export const workoutsCreateErrorAction = error => ({
    type: ACTION_WORKOUTS_CREATE_ERROR,
    payload: error
})