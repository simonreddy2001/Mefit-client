export const ProfileUpdateAPI = {
    ProfileUpdateAPI({ weight, height, medicalConditions, disabilities}) {
        return fetch('https://localhost:44339/api/v1/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  weight, height, medicalConditions, disabilities})
        }).then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
}