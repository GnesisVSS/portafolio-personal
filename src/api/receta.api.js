import axios from "axios";


let urlr = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';

export const mostrarRecetas = async () =>
    await axios.get(urlr)


export const consMostrar = (resp) => {
    resp;
    return (
        console.log(resp)
    )
}