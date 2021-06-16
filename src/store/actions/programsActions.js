export const ACTION_PROGRAMS_FETCHING = '[programs] FETCHING'
export const ACTION_PROGRAMS_SET = '[programs] SET'
export const ACTION_PROGRAMS_FETCH_ERROR = '[programs] FETCH_ERROR'
export const ACTION_PROGRAMS_CREATE = '[programs] CREATE'
export const ACTION_PROGRAMS_ADD = '[programs] ADD'
export const ACTION_PROGRAMS_CREATE_ERROR = '[programs] CREATE_ERROR'

export const programsFetchingAction = () => ({
    type: ACTION_PROGRAMS_FETCHING
})

export const programsSetAction = programs => ({
    type: ACTION_PROGRAMS_SET,
    payload: programs
})

export const programsFetchErrorAction = error => ({
    type: ACTION_PROGRAMS_FETCH_ERROR,
    payload: error
})

export const programsCreateAction = program => ({
    type: ACTION_PROGRAMS_CREATE,
    payload: program
})

export const programsAddAction = program => ({
    type: ACTION_PROGRAMS_ADD,
    payload: program
})


export const programsCreateErrorAction = error => ({
    type: ACTION_PROGRAMS_CREATE_ERROR,
    payload: error
})