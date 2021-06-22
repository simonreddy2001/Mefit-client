import Keycloak from "keycloak-js";
import { createContext, useEffect, useState } from "react";

export const KeycloakContext = createContext()

export function KeycloakProvider({ children }) {

    const [state, setState] = useState({
        keycloak: null,
        initialising: true,
        authenticated: false
    });
//async function to fetch 
    const handleKeycloakInitSuccess = keycloak => {
        //make a call to backened check if the user exists (results bool)
        //check profile need to be completed (if its false)
         
        setState({
            keycloak,
            initialising: false,
            authenticated: true,
        });
        console.log(keycloak)
    }

    const handleKeycloakInitError = error => {
        console.error('Keycloak Init Error', error);
    }

    useEffect(() => {

        if (state.keycloak !== null) return;

        console.log('initialize');

        const keycloak = new Keycloak('/keycloak.json')
        keycloak.init({ onLoad: 'check-sso' }).then(_ => handleKeycloakInitSuccess(keycloak))
            .catch(handleKeycloakInitError)
            

    }, [])

    useEffect(() => {

        if (state.keycloak && state.keycloak.authenticated) {
            setInterval(() => {
                state.keycloak.updateToken(70)
                    .then(refreshed => {
                        if (refreshed) {
                            console.info('Token refreshed' + refreshed);
                        } else {
                            console.warn('Token not refreshed, valid for '
                                + Math.round(state.keycloak.tokenParsed.exp + state.keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                        }
                    })
                    .catch(error => console.error(error));
            }, 6000)
        }

    }, [state.keycloak])

    return (
        <KeycloakContext.Provider value={state}>
            {children}
        </KeycloakContext.Provider>
    )
}