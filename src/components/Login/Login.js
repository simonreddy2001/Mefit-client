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
            <article className="card mb-4">
                {initialising && <p>Initialising...</p>}
            </article>

            {!initialising &&
                <main>
                    {(keycloak && keycloak.authenticated) &&
                        <Redirect to="/exercises" />
                    }
                    <article className="card mb-4 col text-center">
                        <h1 className="card-title">Login to MeFit App</h1>
                        <p className="card-text">Welcome to the Fitness App -- MeFit 👑</p>
                    </article>

                    <br></br>
                    <section className="card-body col text-center">
                        <button className="btn btn-primary d-flex" onClick={onLoginClick}>Sign in</button>
                    </section>

                </main>
            }
        </>
    )
}

export default Login