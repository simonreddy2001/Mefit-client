import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { KeycloakContext } from "../../context/KeycloakContext"
import withKeycloak from "../../hoc/withKeycloak"
//import DatePicker from 'react-datetime'

const Dashboard = () => {

    const { keycloak, initialising } = useContext(KeycloakContext)
    const history = useHistory()

    const [state, setState] = useState({
        dashboard: null,
        loading: true
    })
   
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

    const onLogoutClick = () => {

        if (!window.confirm('Are you sure?')) {
            return;
        }

        keycloak.logout().then(() => {
            history.push('/')
        });
    }
    

    return (
        <main>
            <p>Welcome to your Dashboard</p>
            <pre>
                {JSON.stringify(state.dashboard)}
            </pre>
            
            <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{}</h4>
                <p className="card-text">{}</p>
            </section>
            <section className="card-footer">
                Email: {} 
            </section>
            <section className="card-footer btn-toolbar">
                <button className="btn btn-secondary d-flex" type="submit"><Link to="/profile">Back to profile</Link></button>
                <button className="btn btn-danger d-flex" type="submit" onClick={onLogoutClick}>Logout</button>
            </section>
    </article>
    
        </main>
    )
}
export default withKeycloak(Dashboard)