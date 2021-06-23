import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { KeycloakContext } from "../../context/KeycloakContext"
import withKeycloak from "../../hoc/withKeycloak"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Calender from "./Calender"
import { DashboardAPI } from "../Dashboard/DashboardAPI"
//import DatePicker from 'react-datetime'

const Dashboard = () => {

    const { keycloak, initialising } = useContext(KeycloakContext)
    const history = useHistory()

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
        
        keycloak.loadUserProfile()
            .then(dashboard => {
                
                console.log(dashboard);
                
                setState({
                    loading: false,
                    dashboard
                })
            })
    }, [])

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
                <h1>Hi, {}</h1>
                <p>Welcome to your profile</p>    
            </header>
<Calender />
            <pre>
                {JSON.stringify(state.dashboard)}
            </pre>
            <p>{}</p>
            <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{}</h4>
                <p className="card-text">{}</p>
            </section>
            <section className="card-footer">
                Email: {} 
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