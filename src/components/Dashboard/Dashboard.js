import { useState } from "react"
import { useSelector } from "react-redux"
import { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { KeycloakContext } from "../../context/KeycloakContext"
import withKeycloak from "../../hoc/withKeycloak"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Calender from "./Calender"
import { useDispatch } from "react-redux"
import { sessionSetAction } from "../../store/actions/sessionActions"
import { profileSetAction } from "../../store/actions/profileActions"
import axios from "axios"
import { API_ERROR_INVALID_AUTH } from "../../util/api.util"
//import DatePicker from 'react-datetime'

const Dashboard = () => {

    const { keycloak, initialising } = useContext(KeycloakContext)
    const history = useHistory()
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.profileReducer)
    const { username } = profile
    const [state, setState] = useState({
        dashboard: null,
        loading: true
    })
    const mySwal = withReactContent(Swal)
    const onLogoutClick = () => {
        mySwal.fire({
            backdrop: true,
            denyButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonColor: 'var(--bs-yellow)',
            cancelButtonColor: 'var(--bs-teal)',
            title: <p>Logout?</p>,
            text: 'Are you sure you want to logout?',
            cancelButtonText: 'Nope',
            confirmButtonText: 'Yes, Logout'
        }).then(result => {
            if (result.isConfirmed) {
                keycloak.logout().then(() => {
                    history.push('/')
                });
            }
        })
    }
    useEffect(() => {

        if (initialising) return;
        dispatch(sessionSetAction(keycloak.token))
        keycloak.loadUserProfile()
            .then(dashboard => {

                console.log(dashboard);
                dispatch(profileSetAction(dashboard))
                setState({
                    loading: false,
                    dashboard
                })
            })
    }, [])

    const fetchUserProfile = () => {
            return axios.get(`https://localhost:44339/api/v1/profiles/profiles/${username}`).then(response=>response.data)
    }
    const userProfile = fetchUserProfile()
    console.log(userProfile)
    // const fetchUserProfile = () => {
    //     return fetch(`https://localhost:44339/api/v1/profiles/profiles/${username}`,{
    //         headers: {
    //             'Content-Type': 'application/json',
    //             //'Authorization': `Bearer ${token}`
    //         }
    //     }).then(async response => {
    //         if (response.status === 401) {
    //             throw new Error(API_ERROR_INVALID_AUTH)
    //         }
    //         else if (!response.ok) {
    //             const { error = 'An unknown error occurred' } = await response.json()
    //             throw new Error(error)
    //         }
    //         return response.json()
    //     })
    // }
    //   const  getDashboard= async ()=> {

    //     //const { token } = JSON.parse(localStorage.getItem('accessToken'))
    //     return await fetch(`https://localhost:44339/api/v1/users/users/simon.reddy2001@gmail.com`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             //'Authorization': `Bearer ${token}`
    //         }
    //     }).then(async response => {
    //         if (response.status === 401) {
    //             throw new Error(API_ERROR_INVALID_AUTH)
    //         }
    //         else if (!response.ok){ 
    //             const { error = 'An unknown error occurred' } = await response.json()
    //             throw new Error(error)
    //         }
    //         return response.json()
    //     })

    /*const onLogoutClick = () => {

        if (!window.confirm('Are you sure?')) {
            return;
        }

        keycloak.logout().then(() => {
            history.push('/')
        });
    }*/
   
    return (
        <main>
            <header className="mb-5">
                <h1>Hi, {username}</h1>
                <p>Welcome to your profile</p>
            </header>
            <Calender />
            <pre>
                {JSON.stringify(state.dashboard)}
            </pre>
            <p>{ }</p>
            <article className="card mb-4">
                <section className="card-body">
                    <h4 className="card-title">{username}</h4>
                    <p className="card-text">{ }</p>
                </section>
                <section className="card-footer">
                    Email: {userProfile.email}
                </section>
                <section className="card-footer btn-toolbar">
                    <button className="btn btn-outline-primary d-flex" type="submit"><Link to="/profile">Back to profile</Link></button>
                    <button className="btn btn-danger d-flex" type="submit" onClick={onLogoutClick}>Logout</button>
                </section>
            </article>

        </main>
    )
}
export default withKeycloak(Dashboard)