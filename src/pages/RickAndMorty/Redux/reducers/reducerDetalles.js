const initialState = {
    datos: []
};

const ReducerDetalles = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_DATOS':

            const newDatos = [action.payload];
            // se le asigna el arreglo de datos al localstorage
            localStorage.setItem("datos", JSON.stringify(newDatos));
            return {
                ...state,
                datos: newDatos,
            };
        
        case 'MOSTRAR_DATOS_GQL':

            const newDatosQL = [action.payload];
            return {
                ...state,
                datos: newDatosQL,
            };
        case 'MOSTRAR_DATOS_GQL_FAVORITOS':

            const newDatosQLFav = [action.payload];
            return {
                ...state,
                datos: newDatosQLFav,
            };
        default:
            return state;
    }
};

export default ReducerDetalles;