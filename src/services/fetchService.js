export const getAllUsers = async () => {
    let url = 'https://reqres.in/api/users';
    let response = await fetch(url);
    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?: ', response.ok)
    //* we return the json
    return await response.json();
}

export const getAllPagedUsers = async (page) => {
    let url = `https://reqres.in/api/users?page=${page}`;
    let response = await fetch(url);
    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?: ', response.ok);
    return await response.json();
}

export const getUserDetails = async (id) => {
    let url = `https://reqres.in/api/users/${id}`;
    let response = await fetch(url);
    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?: ', response.ok);
    return await response.json();
}

export const login = async (email, password) => {
    let body = {
        email: email,
        password: password,
    }

    let url = `https://reqres.in/api/login`;
    let response = await fetch(url, {
        method: 'POST',
/*         mode: 'no-cors',
        credentials: 'omit',
        cache: 'no-cache',
        headers:{
            'Content-type': 'application/json'
        }, */
        body: body,
    });

    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?: ', response.ok);
    return await response.json();
}