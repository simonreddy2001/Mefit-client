import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { programsCreateAction } from "../../store/actions/programsActions"

const ProgramCreate = () => {

    const { id: userId } = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()
    const mySwal = withReactContent(Swal)

    const [program, setProgram] = useState({
        name: '',
        category: '',
        postError: ''
    })

    const onPostSubmit = e => {
        e.preventDefault()

        if (!program.name || !program.category) {
            mySwal.fire({
                backdrop: true,
                title: <p>Missed something</p>,
                html: '<span class="material-icons">error</span><br>Please make sure you add a <b>name</b> and a <b>categoty</b> for the post 👌',
                confirmButtonText: 'Gotcha'
            }).then(_ => {})
            return;
        }

        dispatch(programsCreateAction({ ...program, userId }))
        setProgram({
            name: '',
            category: '',
            programError: ''
        })
    }

    const onInputChange = e => {
        setProgram({
            ...program,
            [e.target.id]: e.target.value
        })
    }

    return (
        <article className="card mb-4">
            <section className="card-header pb-0">
                <h4 className="card-title">Add new Program</h4>
                <p className="card-sub-title">What kind of program you want to add?</p>
            </section>
            <section className="card-body">
                <form onSubmit={onPostSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label visually-hidden" aria-label="Program name">Program name</label>
                        <input id="name" onChange={ onInputChange } type="text" 
                                        className="form-control" 
                                        placeholder="Program name" 
                                        value={ program.name }
                                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label visually-hidden" aria-label="Program category">Program category</label>
                        <textarea id="category" onChange={ onInputChange } 
                                    rows="2" 
                                    className="form-control" 
                                    placeholder="Program category" 
                                    value={ program.category }
                                    ></textarea>
                    </div>

                    

                    <button className="btn btn-info d-flex" type="submit">
                        <span className="material-icons">create</span> &nbsp;
                        <span>Create Program</span>
                    </button>
                </form>
            </section>
        </article>
    )
}
export default ProgramCreate