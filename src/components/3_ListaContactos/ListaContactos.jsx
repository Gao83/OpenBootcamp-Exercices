import React, { useState } from 'react'
import { Contacto } from '../../models/contactos_class'
import ContactoComponent from './ContactoComponent'
import ContactosForm from './ContactosForm'

function ListaContactos() {

    let contacto1 = new Contacto('Isaac', 'Miralles', '+34 656384939', 'isaac@gmail.com')
    let contacto2 = new Contacto('Pepe', 'Rodriguez', '+34 657383854', 'pepe@gmail.com')


    const [contacts, setContacts] = useState([contacto1, contacto2])


    function deleteContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)
        setContacts(tempContact)

    }

    function addContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className='header p-3'>
                        <h1>Mis Contactos</h1>
                    </div>
                    <div>
                        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                            <table>
                                <tbody>
                                    {contacts.map((contacts, index) => {
                                        return (
                                            <ContactoComponent
                                                key={index}
                                                info={contacts}
                                                remove={deleteContact}
                                            ></ContactoComponent>
                                        )
                                    })}

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <ContactosForm
                add = {addContact}
                ></ContactosForm>
            </div>

        </div>
    )
}

export default ListaContactos