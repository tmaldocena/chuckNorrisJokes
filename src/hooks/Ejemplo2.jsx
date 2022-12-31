import React, { useState, useRef, useEffect } from "react";

/**
 * ? USO DE useState, useRef y useEffect
 */

const Ejemplo2 = () => {
    
    // ! Vamos a crear dos contadores distintos!

    
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //? Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar() {
        setcontador1(contador1 +1);
    }

    function incrementar2() {
        setcontador2(contador2 +1);
    }

    //TODO  Trabajando con useEffect()

    /**
     *? CASO 1: Ejecutar siempre un snippet de codigo
        cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect()
     */

    //    useEffect(() => {
    //        console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //        console.log('Mostrando referencia a elemento del DOM: ');
    //        console.log(miRef);
    //    });

    /**
     *? CASO 2: Ejecutar solo cuando cambie el contador 1
        cada vez que haya un cambio en el contador 1, se ejecuta lo que esta dentro del useEffect(), si cambia el contador 2 no ocurre nada!
     *? CASO 2.1: Ejecutar cuando cambien ambos contadores
        cada vez que haya un cambio en el contador 1 o 2, se ejecuta lo que esta dentro del useEffect()
     */

        useEffect(() => {
            console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 y 2!!");
            console.log(miRef);
        }, [contador1, contador2]);


    return (
        <div>
            <h1>** Ejemplo de useState(), useRef() y useEffect() **</h1>
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>
            {/*Elemento Referenciado*/}
            <h4 ref={ miRef }>
                Ejemplo de Elemento Referenciado!
            </h4>
            {/*Botones para los contadores*/}
            <button onClick={ incrementar }>Incrementar contador 1</button>
            <button onClick={ incrementar2 }>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
