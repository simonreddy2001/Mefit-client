export const RegisterAPI = {
    register({ email, }) {
        return fetch('https://localhost:44339/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password})
        }).then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
}