import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { exercisesCreateAction } from "../../store/actions/exercisesActions"

const ExerciseCreate = () => {

    const { id: userId } = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()
    const mySwal = withReactContent(Swal)

    const [exercise, setExercise] = useState({
        name: '',
        description: '',
        postError: ''
    })

    const onPostSubmit = e => {
        e.preventDefault()

        if (!exercise.name || !exercise.description) {
            mySwal.fire({
                backdrop: true,
                title: <p>Missed something</p>,
                html: '<span class="material-icons">error</span><br>Please make sure you add a <b>title</b> and a <b>body</b> for the post 👌',
                confirmButtonText: 'Gotcha'
            }).then(_ => {})
            return;
        }

        dispatch(exercisesCreateAction({ ...exercise, userId }))
        setExercise({
            name: '',
            description: '',
            exerciseError: ''
        })
    }

    const onInputChange = e => {
        setExercise({
            ...exercise,
            [e.target.id]: e.target.value
        })
    }

    return (
        <article className="card mb-4">
            <section className="card-header pb-0">
                <h4 className="card-title">Add new Exercise</h4>
                <p className="card-sub-title">What kind of exercise you want to add?</p>
            </section>
            <section className="card-body">
                <form onSubmit={onPostSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label visually-hidden" aria-label="Exercise name">Exercise name</label>
                        <input id="name" onChange={ onInputChange } type="text" 
                                        className="form-control" 
                                        placeholder="Exercise name" 
                                        value={ exercise.name }
                                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label visually-hidden" aria-label="Exercise description">Exercise description</label>
                        <textarea id="description" onChange={ onInputChange } 
                                    rows="2" 
                                    className="form-control" 
                                    placeholder="Exercise description" 
                                    value={ exercise.description }
                                    ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="target" className="form-label visually-hidden" aria-label="Exercise target muscle group">Exercise target muscle group</label>
                        <textarea id="target" onChange={ onInputChange } 
                                    className="form-control" 
                                    placeholder="Exercise target muscle group" 
                                    value={ exercise.targetMuscleGroup }
                                    ></textarea>
                    </div>

                    <button className="btn btn-warning d-flex" type="submit">
                        <span className="material-icons">create</span> &nbsp;
                        <span>Create Exercise</span>
                    </button>
                </form>
            </section>
        </article>
    )
}
export default ExerciseCreate