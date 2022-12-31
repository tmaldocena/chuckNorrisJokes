/**
 * 
 *?  Ejemplo 3 de Hooks:
 ** - useState()
 ** - useContext()
 * 
 */

import React, { useState, useContext } from 'react';

   //? Inicializamos un estado vacio que va a rellenarse con los datos del contexto del Padre
   const miContexto = React.createContext(null);


//* Componente 1 dispone de un contexto que va a tener un valor que recibe desde el Padre!

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: { state.token }
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
 }


const Componente2 = () => {
    
    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>
                La sesion es: { state.sesion }
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    };
    
    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion() {
        setsesionData(
            {
                token: '123ABC456DEF',
                sesion: sesionData.sesion +1
            }
        );

    }

    return (
        <miContexto.Provider value={ sesionData }>
            {/* Todo lo que esta aca dentro puede leer los datos de sesionData. Ademas si se actualiza. los componentes de aqui, tambien se actualizan!*/}
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}