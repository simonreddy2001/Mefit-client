import { API_ERROR_INVALID_AUTH } from "../../util/api.util"

export const WorkoutsAPI = {
    getWorkouts() {
        //const { token } = JSON.parse(localStorage.getItem('rtxt-ss'))
        return fetch('https://localhost:44339/api/v1/workouts', {
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            }
        }).then(async response => {
            if (response.status === 401) {
                throw new Error(API_ERROR_INVALID_AUTH)
            }
            else if (!response.ok){ 
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
}