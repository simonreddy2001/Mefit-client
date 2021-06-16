import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContainer from '../../hoc/AppContainer'
import { workoutsFetchingAction } from "../../store/actions/workoutsActions"
import WorkoutCreate from "../WorkoutCreate/WorkoutCreate"
import Workout from "./Workout"
const Workouts = () => {

    const {
        workouts,
        workoutsFetching,
        workoutsError
    } = useSelector(state => state.workoutsReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(workoutsFetchingAction())
    }, [dispatch])

    return (
        <AppContainer>
            <header>
                <WorkoutCreate />
            </header>
            {workoutsFetching && <p>Getting the latest workouts...</p>}
            {workoutsError && <p>{workoutsError}</p>}
            <section>
                {workouts.map(workout => <Workout key={workout.id} workout={workout} />)}
            </section>
        </AppContainer>
    )
}
export default Workouts