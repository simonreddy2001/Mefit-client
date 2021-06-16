import { useContext } from "react"
import { Redirect } from "react-router"
import { KeycloakContext } from "../../context/KeycloakContext"

const Login = () => {

    const { keycloak, initialising } = useContext(KeycloakContext)

    console.log(keycloak);
    console.log(initialising);

    const onLoginClick = async event => {
        event.preventDefault();
        try {
            const authenticated = keycloak.login();
            console.log(authenticated);
        }
        catch (error) {
            console.error('Login Error', error);
        }
    }

    return (
        <>
            { initialising && <p>Initialising...</p>}
            { !initialising &&
                <main>
                    {(keycloak && keycloak.authenticated) &&
                        <Redirect to="/exercises" />
                    }
                    <h1>Login to MeFit App</h1>
                    <p>Welcome to the Fitness App -- MeFit 👑</p>
                    <br></br>
                    <button onClick={onLoginClick}>Sign in</button>
                </main>
            }
        </>
    )
}

export default Login