import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
//import { KeycloakContext } from "../../context/KeycloakContext"
import AppContainer from "../../hoc/AppContainer"
import { registerAttemptAction } from "../../store/actions/registerActions"


const ProfileUpdate = () => {

    const dispatch = useDispatch()
    //const { loggedIn } = useSelector(state => state.sessionReducer)

    const [addProfile, setAddProfile] = useState({
        weight: '',
        height: '',
        medicalConditions: '',
        disabilities: '',
    })

    const onInputChange = e => {
        setAddProfile({
            ...addProfile,
            [e.target.id]: e.target.value
        })
    }


    const onFormSubmit = e => {
        e.preventDefault()
        dispatch(registerAttemptAction(addProfile))
    }

    return (
        <AppContainer>
            
            <form onSubmit={onFormSubmit} className="mt-3">
                <h1>Update your profile for MeFit</h1>
                <p>Complete the form to add profile</p>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">Weight</label>
                    <input id="weight" type="text" placeholder="95.5" onChange={onInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="height" className="form-label">Height</label>
                    <input id="height" type="text" placeholder="160.5" onChange={onInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="medicalConditions" className="form-label">Medical Conditions</label>
                    <input id="medicalConditions" type="text" placeholder="Diabeties, Heart problems" onChange={onInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="disabilities" className="form-label">Disabilities</label>
                    <input id="disabilities" type="text" placeholder="transplanted body parts, Any operations" onChange={onInputChange} className="form-control" />
                </div>

               

                <button className="btn btn-success btn-lg">Add Profile</button>
            </form>

            <p className="mt-3">
                <Link to="/dashboard">Go to Dashboard</Link>
            </p>
        </AppContainer>
    )
}
export default ProfileUpdate