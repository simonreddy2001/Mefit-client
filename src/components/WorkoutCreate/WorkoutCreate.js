import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { workoutsCreateAction } from "../../store/actions/workoutsActions"

const WorkoutCreate = () => {

    const { id: userId } = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()
    const mySwal = withReactContent(Swal)

    const [workout, setWorkout] = useState({
        name: '',
        description: '',
        postError: ''
    })

    const onPostSubmit = e => {
        e.preventDefault()

        if (!workout.name || !workout.description) {
            mySwal.fire({
                backdrop: true,
                title: <p>Missed something</p>,
                html: '<span class="material-icons">error</span><br>Please make sure you add a <b>title</b> and a <b>body</b> for the post 👌',
                confirmButtonText: 'Gotcha'
            }).then(_ => {})
            return;
        }

        dispatch(workoutsCreateAction({ ...workout, userId }))
        setWorkout({
            name: '',
            description: '',
            workoutError: ''
        })
    }

    const onInputChange = e => {
        setWorkout({
            ...workout,
            [e.target.id]: e.target.value
        })
    }

    return (
        <article className="card mb-4">
            <section className="card-header pb-0">
                <h4 className="card-title">Add new Workout</h4>
                <p className="card-sub-title">What kind of workout you want to add?</p>
            </section>
            <section className="card-body">
                <form onSubmit={onPostSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label visually-hidden" aria-label="Workout name">Workout name</label>
                        <input id="name" onChange={ onInputChange } type="text" 
                                        className="form-control" 
                                        placeholder="Workout name" 
                                        value={ workout.name }
                                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label visually-hidden" aria-label="Workout description">Workout description</label>
                        <textarea id="description" onChange={ onInputChange } 
                                    rows="2" 
                                    className="form-control" 
                                    placeholder="Workout description" 
                                    value={ workout.description }
                                    ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="target" className="form-label visually-hidden" aria-label="Workout target muscle group">Workout target muscle group</label>
                        <textarea id="target" onChange={ onInputChange } 
                                    className="form-control" 
                                    placeholder="Workout target muscle group" 
                                    value={ workout.targetMuscleGroup }
                                    ></textarea>
                    </div>

                    <button className="btn btn-warning d-flex" type="submit">
                        <span className="material-icons">create</span> &nbsp;
                        <span>Create Workout</span>
                    </button>
                </form>
            </section>
        </article>
    )
}
export default WorkoutCreate