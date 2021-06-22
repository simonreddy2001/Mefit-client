import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { KeycloakContext } from "../../context/KeycloakContext"
import withKeycloak from "../../hoc/withKeycloak"

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
            <h1>Dashboard</h1>
            <p>Welcome to your Dashboard</p>
            <button onClick={onLogoutClick}>Logout</button>
            <p>
                <Link to="/profile">Back to profile</Link>
            </p>
            <pre>
                {JSON.stringify(state.dashboard)}
            </pre>
        </main>
    )
}
export default withKeycloak(Dashboard)