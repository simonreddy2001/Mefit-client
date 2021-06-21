import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import 'bootstrap/dist/js/bootstrap.bundle'
import logo from '../../Assets/logo.jpg'


export const Navbar = () => {
    const { email } = useSelector(state => state.sessionReducer)
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 fixed-top">
            <div><img src={logo} alt="Logo"></img></div>
            <AppContainer>
                <Link className="navbar-brand" to="/profile">MeFit</Link>
                {email &&
                
                    <>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/exercises">Exercises</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/programs">Programs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>

                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link d-flex" to="/profile">
                                        <span className="material-icons">account_circle</span>
                                        &nbsp;Welcome, {email}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </AppContainer>
        </nav>
    )
}