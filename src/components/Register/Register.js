import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import { registerAttemptAction } from "../../store/actions/registerActions"


const Register = () => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
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
            { loggedIn && <Redirect to="/posts" />}
            <form onSubmit={onFormSubmit} className="mt-3">
                <h1>Register for MeFit</h1>
                <p>Complete the form to create an account</p>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Choose a username *</label>
                    <input id="username" type="text" placeholder="johndoe" onChange={onInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Choose a password *</label>
                    <input id="password" type="password" placeholder="******" onChange={onInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm your password *</label>
                    <input id="confirmPassword" type="password" placeholder="******" onChange={onInputChange} className="form-control" />
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