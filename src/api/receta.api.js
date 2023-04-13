import axios from "axios";


let urlr = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';

export const mostrarRecetas = async () =>
    await axios.get(urlr)

export const cargarRecetaAdmin = async (ingreso) => {
    const encodedUrl = encodeURIComponent(ingreso.imgUrl);
    await axios.post(urlr + `/${ingreso.nombre}` + `/${ingreso.descripcion}` + `/${ingreso.preparacion}` + `/${ingreso.categoria}` + `/${ingreso.tiempoPreparacion}` + `/${ingreso.porciones}` + `/${ingreso.dificultad}` + `/url=${encodedUrl}`)
        .then((response) => {
            alert("Receta registrada exitosamente")
            window.location.reload();
        })
}


// Recetas guardadas
export const mostrarRecetasGuardadas = async (ingreso) =>
    await axios.get(urlr + `/${ingreso}`)

//insertar recetas guardadas
export const cargarGuardados = async (idreceta, correousuario) => {
    await axios.post(urlr + `/${idreceta}` + `/${correousuario}`)
        .then((response) => {
            alert("Receta guardada exitosamente")
        })
}

//eliminar recetas guardadas
export const eliminarGuardados = async (idreceta, correousuario) => {
    await axios.delete(urlr + `/${idreceta}` + `/${correousuario}`)
        .then((response) => {
            alert("Receta eliminada exitosamente")
        })
}
