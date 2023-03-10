let urlr = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';

export const mostrarRecetas = async (valores) => {
    await axios.get(urlr);
}