import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
const Exercise = ({exercise}) => {
    function addToProfile(exercise){
       
    }
    function editExercise(exercise){
          //const { token } = JSON.parse(localStorage.getItem('rtxt-ss'))
        return fetch(`https://localhost:44339/api/v1/exercises/${exercise.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(exercise)
        }).then(async response => {
            if (response.status === 401) {
                throw new Error(API_ERROR_INVALID_AUTH)
            }
            else if (!response.ok){ 
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
    return (
        <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{exercise.name}</h4>
                <p className="card-text">{exercise.description}</p>
            </section>
            <section className="card-footer">
                details: {exercise.id} { exercise.targetMuscleGroup }
            </section>
            <section className="card-footer btn-toolbar">
                <button className="btn btn-secondary d-flex" onClick={addToProfile}>Add to my profile</button>
                <button className="btn btn-danger d-flex" onClick={editExercise}>Edit</button>
            </section>
        </article>
    )
}
export default Exercise