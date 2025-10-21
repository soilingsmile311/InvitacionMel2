import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyCb0MrtD6-PAABpxHayZzCmm8dPM96ForA",
	authDomain: "xvmelanie-7a711.firebaseapp.com",
	databaseURL: "https://xvmelanie-7a711-default-rtdb.firebaseio.com",
	projectId: "xvmelanie-7a711",
	storageBucket: "xvmelanie-7a711.firebasestorage.app",
	messagingSenderId: "502800130581",
	appId: "1:502800130581:web:a384d5e9a56c177871a41c",
	measurementId: "G-8H59N7YNG1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const form = document.getElementById('pasesFormulario');
console.log("Esto jalo");

form.addEventListener('submit', function(e) {
	e.preventDefault(); // evita que recargue la página

	console.log("Click en submit");

	const nombre = document.getElementById('nombreInvitado').value.trim();
	const pases = document.querySelector('input[name="choice"]:checked')?.value;

    console.log("Confirmaron: " + pases);

    // Conseguir la referencia del json
    const personasRef = ref(database, 'personas');
    const nuevaPersonaRef = push(personasRef);

	// Guardar los datos
    set(nuevaPersonaRef, {
        nombre: nombre,
        confirmacion: pases
    })
	.then(() => {
        console.log("Nuevo registro agregado!");
        alert("Registro agregado exitosamente!");
	})
	.catch((error) => {
	    console.error("Error al agregar documento: ", error);
	});
});