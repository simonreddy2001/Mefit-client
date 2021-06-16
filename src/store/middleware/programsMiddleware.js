import { ProgramCreateAPI } from "../../components/ProgramCreate/ProgramCreateAPI"
import { ProgramsAPI } from "../../components/Programs/ProgramsAPI"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { ACTION_PROGRAMS_CREATE, ACTION_PROGRAMS_FETCHING, programsAddAction, programsCreateErrorAction, programsFetchErrorAction, programsSetAction } from "../actions/programsActions"
import { sessionExpiredAction } from "../actions/sessionActions"

export const programsMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_PROGRAMS_FETCHING) {

        ProgramsAPI.getPrograms()
            .then(programs => {
                dispatch(programsSetAction(programs))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(programsFetchErrorAction(message))
                }
            })
    }

    if (action.type === ACTION_PROGRAMS_CREATE) {

        ProgramCreateAPI.createProgram(action.payload)
            .then(program => {
                dispatch(programsAddAction(program))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(programsCreateErrorAction(message))
                }
            })

    }

}