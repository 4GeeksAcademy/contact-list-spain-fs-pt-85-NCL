// const getState = ({ getStore, getActions, setStore }) => { 
//     return {
//         store: {
//             listContacts: [] 
//         },
//         actions: {
//             createUser: () => {
//                 fetch("https://playground.4geeks.com/contact/agendas/nacho", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({}),
//                 })                
//                     .then((response) => response.json())
//                     .then((data) => {
//                         console.log(data);

//                     })
//                     .catch((error) => console.log(error));
//             },
//             getInfoContacts: () => {
//                 fetch("https://playground.4geeks.com/contact/agendas/nacho/contacts", {
//                     method: "GET"
//                 })
//                     .then((response) => {
//                         if (response.status == 404) {
//                             getActions().createUser()
//                         }
//                         if (response.ok) {
//                             return response.json()
//                         }
//                     })
//                     .then((data) => {
//                         if (data) {
//                             setStore({ listContacts: data.contacts })
//                         }
//                     }) 
//                     .catch((error => console.log(error)))
//             },

//             addContactToList: (contact) => {
//                 const store = getStore();
//                 setStore({ ...store, listContacts: [...store.listContacts, contact] })
//             },
    
//             // createContact: (payload) => {
//             //     if (!payload.full_name || !payload.phone || !payload.email || !payload.address) {
//             //         console.error("Missing required fields");
//             //         return;
//             //     }
//             //     console.log("Payload enviado:", payload);

//             //     fetch("https://playground.4geeks.com/contact/agendas/nacho/contacts", {
//             //         method: "POST",
//             //         headers: {
//             //             'Content-Type': 'application/json'
//             //         },
//             //         body: JSON.stringify(payload),
//             //     })
//             //         .then((response) => {
//             //             if (!response.ok) {
//             //                 console.error(`Error ${response.status}: ${response.statusText}`);
//             //                 throw new Error(`Error al crear el contacto: ${response.status}`);
//             //             }
//             //             return response.json();
//             //         })
//             //         .then((data) => {
//             //             console.log("Contacto creado:", data);
//             //             const actions = getActions();
//             //             actions.addContactToList(data);
//             //         })
//             //         .catch((error) => {
//             //             console.error("Error al procesar la solicitud:", error);
//             //         });
//             // },            
//             createContact: (payload) => {
//                 if (!payload.full_name || !payload.phone || !payload.email || !payload.address) {
//                     console.error("Missing required fields");
//                     return;
//                 }
            
//                 console.log("Payload enviado:", payload);
            
//                 fetch("https://playground.4geeks.com/contact/agendas/nacho/contacts", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(payload),
//                 })
//                     .then((response) => {
//                         if (!response.ok) {
//                             console.error(`Error ${response.status}: ${response.statusText}`);
//                             throw new Error(`Error al crear el contacto: ${response.status}`);
//                         }
//                         return response.json();
//                     })
//                     .then((data) => {
//                         console.log("Contacto creado:", data);
//                         const actions = getActions();
//                         actions.addContactToList(data);
//                     })
//                     .catch((error) => {
//                         console.error("Error al procesar la solicitud:", error);
//                     });
//             },            
//             deleteContact: (id) => {
//                 fetch(`https://playground.4geeks.com/contact/agendas/nacho/contacts/${id}`, {
//                     method: "DELETE",
//                 })
//                     .then((response) => {
//                         console.log(response)
//                         if (response.ok) {
//                             const store = getStore();
//                             const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
//                             setStore({ listContacts: updatedContacts });
//                             console.log(`Contact with ID ${id} deleted`);
//                         } else {
//                             console.log("Error deleting contact");
//                         }
//                     })
//                     .catch((error) => console.log(error));
//             },

//             editContact: (id, contact) => {
//                 if (!contact.full_name || !contact.phone || !contact.email || !contact.address) {
//                     console.error("Missing required fields");
//                     return;
//                 }
            
//                 fetch(`https://playground.4geeks.com/contact/agendas/nacho/contacts/${id}`, {
//                     method: "PUT",
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(contact)
//                 })
//                 .then((response) => {
//                     if (!response.ok) {
//                         console.error(`Error ${response.status}: ${response.statusText}`);
//                         throw new Error(`Error al editar el contacto: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log("Contacto actualizado:", data);
//                     const store = getStore();
//                     const updatedList = store.listContacts.map(contact => {
//                         if (contact.id == id) {
//                             contact = data;
//                         }
//                         return contact;
//                     });
//                     setStore({ listContacts: updatedList });
//                 })
//                 .catch((error) => {
//                     console.error("Error al procesar la solicitud:", error);
//                 });
//             },            
//         }
//     }
// };

// export default getState;

const getState = ({ getStore, getActions, setStore }) => { 
    return {
        store: {
            listContacts: [] 
        },
        actions: {
            createUser: () => {
                fetch("https://playground.4geeks.com/contact/agendas/nacho", {
                    method: "POST",

                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                    })
                    .catch((error) => console.log(error));
            },

            getInfoContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/nacho/contacts", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.status == 404) {
                            getActions().createUser()
                        }
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listContacts: data.contacts })
                        }
                    }) 
                    .catch((error => console.log(error)))
            },

            addContactToList: (contact) => {
                const store = getStore();
                setStore({ ...store, listContacts: [...store.listContacts, contact] })
            },

            createContact: (payload) => {
                fetch("https://playground.4geeks.com/contact/agendas/nacho/contacts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        payload
                    ),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const actions = getActions(); 
                        actions.addContactToList(data); 
                        console.log("Contact added:", data);
                    })
                    .catch((error) => console.log(error));
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/nacho/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
                            setStore({ listContacts: updatedContacts });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },

            editContact: (id, contact) => {
                const store = getStore()
                fetch(`https://playground.4geeks.com/contact/agendas/nacho/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const updatedList = store.listContacts.map(contact => {
                                if (contact.id == id) {
                                    contact = data
                                }
                                return contact
                            })
                            setStore({ listContacts: updatedList })
                        }
                    })
                    .catch((error) => console.log(error));


            }
        }
    }
};

export default getState;