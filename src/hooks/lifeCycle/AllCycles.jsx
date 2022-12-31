import React, { useEffect } from 'react';

const AllCycles = () => {
    
    useEffect(() => {
        console.log("Componente creado");

        const intervalo = setInterval(() => {
            document.title = `${new Date()}`
            console.log("Actualizado el componente");
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer");
            document.title = "Tiempo detenido";
            clearInterval(intervalo);
        };
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
