const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Lista de contactos
			contacts: [
				// Aquí puedes tener algunos contactos iniciales si lo deseas
				{
					name: "John Doe",
					email: "johndoe@example.com",
					phone: "123-456-7890",
					address: "123 Main St"
				},
				{
					name: "Jane Smith",
					email: "janesmith@example.com",
					phone: "987-654-3210",
					address: "456 Oak St"
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Ejemplo de función que cambia el color
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// Acción para cargar datos, si fuera necesario
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// Acción para cambiar el color
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},

			// Nueva acción para agregar un nuevo contacto
			addContact: (newContact) => {
				const store = getStore();
				// Agregamos el nuevo contacto a la lista de contactos
				setStore({
					contacts: [...store.contacts, newContact]
				});
			}
		}
	};
};

export default getState;