import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { KeycloakContext } from "../../context/KeycloakContext"
import AppContainer from "../../hoc/AppContainer"
import { registerAttemptAction } from "../../store/actions/registerActions"


const Register = () => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)

    const [user, setUser] = useState({
        email: KeycloakContext.email,
        firstname: KeycloakContext.firstname,
        lastname: KeycloakContext.lastname
    })

    const onInputChange = e => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }


    const onFormSubmit = e => {
        e.preventDefault()
        dispatch(registerAttemptAction(user))
    }

    return (
        <AppContainer>
            { loggedIn && <Redirect to="/dashboard" />}
            <form onSubmit={onFormSubmit} className="mt-3">
                <h1>Register for MeFit</h1>
                <p>Complete the form to create an account</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Choose a email *</label>
                    <input id="email" type="email" placeholder="johndoe@email.dk" onChange={onInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First name *</label>
                    <input id="firstname" type="text" placeholder="John" onChange={onInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name *</label>
                    <input id="lastname" type="text" placeholder="Doe" onChange={onInputChange} className="form-control" />
                </div>

               

                <button className="btn btn-success btn-lg">Register</button>
            </form>

            <p className="mt-3">
                <Link to="/login">Already registered? Login here</Link>
            </p>
        </AppContainer>
    )
}
export default Register