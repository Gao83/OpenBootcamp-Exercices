// Ejemplo de  useState(), useRef(), useEffect()

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)


    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('Mostrando referencia al elemento DOM')
    //     console.log(miRef)

    // })


    // useEffect(() => {
    //     console.log('cambio en el estado del contador 1')
    //     console.log('Mostrando referencia al elemento DOM')
    //     console.log(miRef)
    // }, [contador1])

    useEffect(() => {
        console.log('cambio en el estado del contador 1 o contador 2')
        console.log('Mostrando referencia al elemento DOM')
        console.log(miRef)
    }, [contador1, contador2])

    return (
        <div>
            <h1>Ejemplo de useState(), useRef(), useEffect()</h1>
            <h2>Contador: {contador1}</h2>
            <h2>Contador: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento de referenciado
            </h4>


            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>

            </div>
        </div >
    );
}

export default Ejemplo2;
