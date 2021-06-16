export const ACTION_EXERCISES_FETCHING = '[exercises] FETCHING'
export const ACTION_EXERCISES_SET = '[exercises] SET'
export const ACTION_EXERCISES_FETCH_ERROR = '[exercises] FETCH_ERROR'
export const ACTION_EXERCISES_CREATE = '[exercises] CREATE'
export const ACTION_EXERCISES_ADD = '[exercises] ADD'
export const ACTION_EXERCISES_CREATE_ERROR = '[exercises] CREATE_ERROR'

export const exercisesFetchingAction = () => ({
    type: ACTION_EXERCISES_FETCHING
})

export const exercisesSetAction = exercises => ({
    type: ACTION_EXERCISES_SET,
    payload: exercises
})

export const exercisesFetchErrorAction = error => ({
    type: ACTION_EXERCISES_FETCH_ERROR,
    payload: error
})

export const exercisesCreateAction = exercise => ({
    type: ACTION_EXERCISES_CREATE,
    payload: exercise
})

export const exercisesAddAction = exercise => ({
    type: ACTION_EXERCISES_ADD,
    payload: exercise
})


export const exercisesCreateErrorAction = error => ({
    type: ACTION_EXERCISES_CREATE_ERROR,
    payload: error
})