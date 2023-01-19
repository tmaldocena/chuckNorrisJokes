import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';


const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');


        getNumbers.subcribe(
            {
                next(newNumber){
                    console.log('New number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong! ${error}`);
                    console.log('Error in Observable');
                },
                complete(){
                    alert(`Finished with ${number}`);
                }
            }
        );
        console.log('Finished receiving numbers');
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obatin new numbers</button>
        </div>
    );
}

export default ObservableExample;
