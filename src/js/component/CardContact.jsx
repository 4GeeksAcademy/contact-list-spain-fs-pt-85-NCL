import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardContact = ({ contact }) => {
    const { actions } = useContext(Context);


    const eliminarContacto = () => {
        console.log(contact);
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                {/* Imagen */}
                <div className="col-12 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
                    <img
                        className="rounded-circle img-fluid"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"
                    />
                </div>

                {/* Informacion */}
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>

                {/* Editar/borrar */}
                <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button type="button" className="btn btn-link p-0" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>

            {/* Modal borrar */}
            <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Do you want to delete this contact?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            If you delete this contact, it cannot be recovered!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CardContact;