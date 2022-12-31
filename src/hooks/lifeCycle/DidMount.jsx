import React, { Component, useEffect } from 'react'

/**
 * ? Ejemplo de uso del metodo
 * ? de ciclo de vida en componente clase y el hook de ciclo de vida
 * ? en componente funcional
 */


export default class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM");
    }

    render() {
        return (
        <div>
            <h1>DidMount</h1>
        </div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM");
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}