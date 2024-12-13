import React from "react";
import CardContact from "../component/CardContact.jsx";

const contactsData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    description: "Software Developer at ABC Company",
    updated: "3 minutes ago"
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    description: "Product Manager at XYZ Company",
    updated: "1 hour ago"
  },
  // Agrega más contactos según sea necesario
];

export const Contacts = () => (
  <div className="d-flex flex-column align-items-center" style={{ height: "100vh" }}>
    <h1 className="text-center my-5">Contact List</h1>
    {contactsData.map((contact) => (
      <CardContact
        key={contact.id}
        name={contact.name}
        image={contact.image}
        description={contact.description}
        updated={contact.updated}
      />
    ))}
  </div>
);
