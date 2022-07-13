import React, { useRef } from 'react'
import { Contacto } from '../../models/contactos_class'

function ContactosForm({ add }) {

    const nameRef = useRef()
    const lastNameRef = useRef()
    const phoneNumberRef = useRef()
    const emailRef = useRef()


    function addContact(e) {
        e.preventDefault()
        const newContact = new Contacto(
            nameRef.current.value,
            lastNameRef.current.value,
            phoneNumberRef.current.value,
            emailRef.current.value,
        )
        add(newContact)
        e.target.reset();
    }

    return (
        <form onSubmit={addContact}>
            <input type="text"  ref={nameRef} placeholder='introduzca nombre'/>
            <input type="text" ref={lastNameRef} placeholder='introduzca apellido' />
            <input type="text" ref={phoneNumberRef} placeholder='introduzca telefono' />
            <input type="text" ref={emailRef} placeholder='introduzca email' />
            <div>
                <button type='submit'>Crear contacto</button>
            </div>

        </form>
    )
}


export default ContactosForm