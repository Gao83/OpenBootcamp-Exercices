import React, { useState, useEffect } from 'react';

const ClockFunction = () => {

    const [data, setData] = useState({
        nombre: 'Martin',
        apellidos: 'San Jose',
        edad: 0,
        fecha: new Date()
    })


    const loggedStyle = {
        color: 'green',
        fontWeight: 'bold'
    }

    const unLoggedStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    const [color, setColor] = useState(true)


    const changeColor = () => {
        if (color) {
            setColor(false)
            console.log('rojo')
        } else {
            setColor(true)
            console.log('verde')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setData({
                ...data,
                fecha: new Date(),
                edad: data.edad + 1,

            })
            changeColor()

        }, 1000);
        return () => clearInterval(interval);
    }, [data]);



    return (
        <div>
            <h1 style={color ? loggedStyle : unLoggedStyle}>funciona</h1>
            <h2>
                Hora Actual:
                {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default ClockFunction;
