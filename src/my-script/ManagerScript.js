import md5 from 'md5';
//const crypto = require('crypto');


// Configuración de las credenciales de Marvel API
const publicKey = '4dcdb0f62b65d99422521f8f90f28144';
const privateKey = 'e5cea803b998e004336a1bb811540b23cf247450';
const timestamp = new Date().getTime().toString();
const generatehash = (timestamp) =>{
    const preHash = timestamp + privateKey + publicKey
    return md5(preHash)
};
const hash = generatehash(timestamp);

/*
// Función para obtener los personajes de Marvel
async function obtenerPersonajesMarvel() {
    const url = `https://gateway.marvel.com/v1/public/characters?&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API de Marvel');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los personajes de Marvel:', error.message);
        throw error;
    }
}

// Llamada a la función para obtener los personajes y manejo de la respuesta
obtenerPersonajesMarvel()
    .then(data => {
        console.log('Personajes de Marvel:', data);
        // Aquí puedes manejar los datos como desees, como mostrarlos en la página web
    })
    .catch(error => {
        // Manejo de errores
    });
*/

const obtenerPersonajePorNombre = async (nombre) => {
    const url = `https://gateway.marvel.com/v1/public/characters?name=${nombre}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API de Marvel');
        }
        const data = await response.json();
        return data.data.results[0];
    } catch (error) {
        console.error('Error al buscar el personaje:', error.message);
        throw error;
    }
};
export default obtenerPersonajePorNombre;