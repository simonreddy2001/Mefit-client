import { ExerciseCreateAPI } from "../../components/ExerciseCreate/ExerciseCreateAPI"
import { ExercisesAPI } from "../../components/Exercises/ExercisesAPI"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { ACTION_POSTS_CREATE, ACTION_POSTS_FETCHING, exercisesAddAction, exercisesCreateErrorAction, exercisesFetchErrorAction, exercisesSetAction } from "../actions/exercisesActions"
import { sessionExpiredAction } from "../actions/sessionActions"

export const postsMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_POSTS_FETCHING) {

        ExercisesAPI.getExercises()
            .then(exercises => {
                dispatch(exercisesSetAction(exercises))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(exercisesFetchErrorAction(message))
                }
            })
    }

    if (action.type === ACTION_POSTS_CREATE) {

        ExerciseCreateAPI.createExercise(action.payload)
            .then(exercise => {
                dispatch(exercisesAddAction(exercise))
            })
            .catch(({ message }) => {
                if (message === API_ERROR_INVALID_AUTH) {
                    dispatch(sessionExpiredAction())
                } else {
                    dispatch(exercisesCreateErrorAction(message))
                }
            })

    }

}