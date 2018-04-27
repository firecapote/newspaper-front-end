export function requestSignIn(payload) {
    const infoUser = {
        email: payload.email,
        password: payload.password
    };

    return fetch('/api/users/signin', {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(infoUser)
    })
        .then((response) => response.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            return {token: data.token, email: infoUser.email};
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return error;
        });
}

export function requestSignUp(payload) {
    const infoUser = {
        name: payload.name,
        age: payload.age,
        email: payload.email,
        password: payload.password
    };

    return fetch('/api/users/signup', {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(infoUser)
    })
        .then((response) => response.text())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            return {result: data, name: infoUser.name};
        })
        .catch(function (error) {
            console.log('Request failed', error);
            return error;
        });
}