import axios from "axios";


let urlr = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';

export const mostrarRecetas = async () =>
    await axios.get(urlr)

export const cargarRecetaAdmin = async (ingreso) => {
    
    await axios.post(urlr + `/${ingreso.nombre}` + `/${ingreso.descripcion}` + `/${ingreso.preparacion}` + `/${ingreso.categoria}` + `/${ingreso.tiempoPreparacion}` + `/${ingreso.porciones}` + `/${ingreso.dificultad}` + `/${ingreso.imgUrl}`)
        .then((response) => {
            alert("Receta registrada exitosamente")
            window.location.reload();
        })
}
    
