import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContainer from '../../hoc/AppContainer'
import { exercisesFetchingAction } from "../../store/actions/exercisesActions"
import ExerciseCreate from "../ExerciseCreate/ExerciseCreate"
import Exercise from "./Exercise"
const Exercises = () => {

    const {
        exercises,
        exercisesFetching,
        exercisesError
    } = useSelector(state => state.exercisesReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(exercisesFetchingAction())
    }, [dispatch])

    return (
        <AppContainer>
            <header>
                <ExerciseCreate />
            </header>
            {exercisesFetching && <p>Getting the latest exercises...</p>}
            {exercisesError && <p>{exercisesError}</p>}
            <section>
                {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} />)}
            </section>
        </AppContainer>
    )
}
export default Exercises