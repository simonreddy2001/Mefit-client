import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
import { DashboardAPI } from "../Dashboard/DashboardAPI"
const Program = ({program}) => {
const profileId = DashboardAPI.id
    function addProgram(id) {
        return fetch(`https://localhost:44339/api/v1/profiles/${profileId}`, {
            method: 'PATCH',
            op: 'replace',

            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({    programId: id  })
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
                <h4 className="card-title">{program.name}</h4>
                <p className="card-text">{program.category}</p>
            </section>
            <section className="card-footer">
                details: {program.id} 
            </section>
            <section className="card-footer btn-toolbar">
                <button className="btn btn-secondary d-flex" type="submit" onClick={() => addProgram(program.id)}>Add to my profile</button>
                <button className="btn btn-danger d-flex" type="submit">Edit</button>
            </section>
        </article>
    )
}
export default Program