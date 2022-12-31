import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";

/**
 * ? USO DE useState()
 */


const Ejemplo1 = () =>{
    // Todo- Valor inicial para un contador

    const valorInicial = 0;

    // ? Valor inicial para una persona

    const personaInicial = {
      nombre: 'Tomás',
      email: 'tomas@mail.com'
    }

    const [contador, setcontador] = useState(valorInicial);

    const [persona, setpersona] = useState(personaInicial);

    function incrementarCont() {
        setcontador(contador +1);
    }

    function actualizarPersona() {
        setpersona({
            nombre: 'Tomi',
            email: 'tomi@mail.com'
        })
    }

    return (
        <div>
            <h1>Ejemplo de useState! :D</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de la Persona: </h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Mail: { persona.email }</h3>
            <button onClick={ incrementarCont }>Incrementar contador!</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1;