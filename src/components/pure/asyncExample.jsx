import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1;
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2);
    }

    async function obtainNumber(){
        generateNumber()
            .then((response) => alert(`response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    async function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }
    
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage() {
        saveSessionStorage('name', 'Tomi')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`);
            })
            .catch((error) => alert(`Something went wrong: ${error} `))
            .finally(() => console.log('Name saved and retrieved correctly!'));
    }
    
    async function obtainMessage(){

        let promise = new Promise((resolve, reject) =>{
            setTimeout(() => resolve('Hello World!'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('I am an ERROR >:( '));
    };

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is okie: ${response}`))
            .catch((error) => alert(`Ooops... There was an error: ${error}`))
            .finally(() => alert('Finally executed'));
    }


    const urlNotFound = async () => {
        try{
            let response = await fetch('https://urlInvalid');
            alert(`Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Something went wrong with the url: ${error} (check your console!)`);
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Something went wrong with the URLs: ${error}`));
    }

    
    return (
        <div>
            <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain another number</button>
            <button onClick={showStorage}>Save Name</button>
            <button onClick={obtainMessage}>Receive message in 2 seconds</button>
            <button onClick={consumeError}>Receive an error</button>
            <button onClick={urlNotFound}>Request an URL</button>
            <button onClick={multiplePromise}>Request multiple URLs</button>
        </div>
    );
}

export default AsyncExample;
