const initialState = {
    isFavorito: false,
};

const ReducerDetallesFavoritos = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGA_ELIMINA_FAVORITOS':
            const newDatos = [...state.id, action.payload.id];

            // Obtener datos del localStorage
            const local = localStorage.getItem("favoritos");

            // Si hay datos en el localStorage, conviértelos a una matriz
            const favoritos = local ? JSON.parse(local) : [{}];

            if (action.payload.id === "null") {
                favoritos.pop();
            } else {
                favoritos.push(action.payload.id);

            }
            // JSON.stringify(favoritos)
            // Guardar la matriz en el localStorage como una cadena
            localStorage.setItem("favoritos", {isFavorito: action.payload.isFavorito, id: JSON.stringify(favoritos)});
            return {
                ...state,
                isFavorito: action.payload.isFavorito,
                id: newDatos
            };
        default:
            return state;
    }
};

export default ReducerDetallesFavoritos;