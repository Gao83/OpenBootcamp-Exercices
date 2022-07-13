import React, { useState, useEffect } from 'react'

function ComponenteEstado() {

    const [partida, setPartida] = useState({
        puntos: 10,
        usuario: 'Martin'
    })

    useEffect(() => {
        saludar()

    }, [partida]);

    const saludar = () => {
        alert('Hola, Se ejecuta el useEffect')
    }

    const sumarPuntos = () => {
        setPartida(
            {
                ...partida,
                puntos: partida.puntos + 1,
            }
        )
    }

    const restarPuntos = () => {
        setPartida(
            {
                ...partida,
                puntos: partida.puntos - 1
            }
        )
    }

    return (
        <div>
            <h1>{partida.usuario}</h1>
            <h2> puntuación: {partida.puntos}</h2>
            <button onClick={sumarPuntos}>Anotar puntos</button>
            <button onClick={restarPuntos}>Restar puntos</button>


        </div>
    )
}

export default ComponenteEstado