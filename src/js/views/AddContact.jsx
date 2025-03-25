import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";


const AddContact = () => {

    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams(); //se obtine el id colocado en el layout

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function guardarContacto(e) {
        e.preventDefault()
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("Empty fields")
            return null
        }
        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        if (!id) {
            actions.createContact(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Contacto añadido con éxito");
        navigate("/");
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");

    }

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const currentContact = store.listContacts.find(contact => contact.id == id)
            setName(currentContact.name)
            setPhone(currentContact.phone)
            setEmail(currentContact.email)
            setAddress(currentContact.address)
        }
    }, [id, store.listContacts])

    return (
        <div className="full-height">
            <div className="container">
                <h1 className="text-center mb-4">{!id ? "Agrega un nuevo contacto" : `Editando Contacto: ${name}`}</h1>

                <form className="container" onSubmit={guardarContacto}>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput1" className="form-label"><b>Nombre Completo</b> </label>
                        <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Añadir Nombre Completo" onChange={(e) => setName(e.target.value)} value={name} required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"><b>Email</b></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Añadir Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput3" className="form-label"><b>Teléfono</b></label>
                        <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Añadir Teléfono" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput4" className="form-label"><b>Dirección</b></label>
                        <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Añadir Dirección" onChange={(e) => setAddress(e.target.value)} value={address} required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-guardar" >Guardar</button>
                    </div>
                </form> 
            <Link to="/">Volver a Contactos</Link>
        </div>
        </div>   
    );


};
export default AddContact;