const url = 'https://loft-taxi.glitch.me';

export const serverLogin = async (logInEmail, logInPassword) => {
    return fetch(`${url}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email: logInEmail, password: logInPassword})
    }).then(res => res.json())
}