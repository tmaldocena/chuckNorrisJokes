import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // ? Introduccion a useState
    // ? const [variable, metodo p/ actualizarlo] = useState(valor inicial);

    const [age, setage] = useState(20);
    
    const birthday = () => {
        setage(age +1);
    }
    
    return (
        <div>
            <h1>
                HoLa { props.name } desde Componente Funcional!
            </h1>
            <h4>
                Tu edad es: { age }
            </h4>
            <div>
                    <button onClick={birthday}>
                        Cumplir Años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
