import { WorkoutCreateAPI } from "../../components/WorkoutCreate/WorkoutCreateAPI"
import { WorkoutsAPI } from "../../components/Workouts/WorkoutsAPI"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { ACTION_WORKOUTS_CREATE, ACTION_WORKOUTS_FETCHING, workoutsAddAction, workoutsCreateErrorAction, workoutsFetchErrorAction, workoutsSetAction } from "../actions/workoutsActions"
import { sessionExpiredAction } from "../actions/sessionActions"

export const workoutsMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_WORKOUTS_FETCHING) {

        WorkoutsAPI.getWorkouts()
            .then(workouts => {
                dispatch(workoutsSetAction(workouts))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(workoutsFetchErrorAction(message))
                }
            })
    }

    if (action.type === ACTION_WORKOUTS_CREATE) {

        WorkoutCreateAPI.createWorkout(action.payload)
            .then(workout => {
                dispatch(workoutsAddAction(workout))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(workoutsCreateErrorAction(message))
                }
            })

    }

}