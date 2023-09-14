export const AGREGAR_DATOS = 'AGREGAR_DATOS'
export const VISUALIZAR_DATOS_DETALLES = 'VISUALIZAR_DATOS_DETALLES'
export const MOSTRAR_DATOS_GQL = 'MOSTRAR_DATOS_GQL'
export const OBTENER_PAGINA = 'OBTENER_PAGINA'
export const AGREGA_FAVORITOS_LOCAL = 'AGREGA_FAVORITOS_LOCAL'
export const ELIMINA_FAVORITOS_LOCAL = 'ELIMINA_FAVORITOS_LOCAL'
export const MOSTRAR_DATOS_GQL_FAVORITOS = 'MOSTRAR_DATOS_GQL_FAVORITOS'
export const MUESTRA_DATOS_LOCAL = 'MUESTRA_DATOS_LOCAL'

export const agregar_Datos = (text) => {
    return{
        type: AGREGAR_DATOS,
        pyload: text
    }
}

export const visualizar_Datos_id = (id) => {
    return{
        type: VISUALIZAR_DATOS_DETALLES,
        pyload: id
    }
}

// para usarlo con graphQL
export const visualizar_Datos_graphql = (datos) => {
    return{
        type: MOSTRAR_DATOS_GQL,
        pyload: datos
    }
}

export const obtener_pagina = page => {
    return{
        type: OBTENER_PAGINA,
        pyload: page
    }
}

export const bool_favoritos = (isFavorito,id) => {
    return{
        type: AGREGA_FAVORITOS_LOCAL,
        pyload: {
            favorito : isFavorito,
            id: id
        }
    }
}

export const bool_favoritos_elimina = (isFavorito,id) => {
    return{
        type: ELIMINA_FAVORITOS_LOCAL,
        pyload: {
            favorito : isFavorito,
            id: id
        }
    }
}

export const mostrar_detalles_favoritos = (datos) => {
    return{
        type: MOSTRAR_DATOS_GQL_FAVORITOS,
        pyload: datos
    }
}

export const mostrar_detalles_favoritos_local = (datos) => {
    return{
        type: MUESTRA_DATOS_LOCAL,
        pyload: datos
    }
}