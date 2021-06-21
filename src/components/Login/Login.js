import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import { loginAttemptAction } from '../../store/actions/loginActions'

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)
    const { loginAttempting, loginError } = useSelector(state => state.loginReducer)

    const onInputChange = e => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        })
    }

    const onLoginSubmit = e => {
        e.preventDefault()
        dispatch(loginAttemptAction(credentials))
    }

    return (
        <>
            { loggedIn && <Redirect to="/dashboard" />}
            { !loggedIn &&
                <AppContainer>

                    <form onSubmit={onLoginSubmit} className="mt-3">
                        <h1>Login to MeFit App</h1>
                        <p>Welcome to the Fitness App -- MeFit 👑</p>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" placeholder="Enter your email" onChange={onInputChange} className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password </label>
                            <input id="password" type="password" placeholder="Enter your password" onChange={onInputChange} className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </form>

                    <p className="mt-3">
                        <Link to="/register">No account? Register here</Link>
                    </p>

                    {loginError &&
                        <div class="alert alert-danger" role="alert">
                            <p className="d-flex mb-0">
                                <span className="material-icons">error</span>&nbsp;
                                <span>{loginError}</span>
                            </p>
                        </div>
                    }

                    {loginAttempting &&
                        <div class="d-flex align-items-center">
                            <div class="spinner-border spinner-border-sm m-2 d-block" role="status" aria-hidden="true"></div>
                            <strong>Attempting to login...</strong>
                        </div>
                    }

                </AppContainer>
            }
        </>
    )
}
export default Login