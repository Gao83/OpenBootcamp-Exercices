import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingFunction = ({ name, lastName }) => {

    const [age, setAge] = useState(29)

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hola {name} {lastName}! </h1>
            <h2>Edad {age}</h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingFunction.propTypes = {
    name: PropTypes.string

};


export default GreetingFunction;
