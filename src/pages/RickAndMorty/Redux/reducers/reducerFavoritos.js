const initialState = {
    isFavorito: false,
    id: [],
    arr: [localStorage.getItem("favoritos")]
};

const ReducerFavoritos = (state = initialState, action) => {
    switch (action.type) {
        case 'ELIMINA_FAVORITOS_LOCAL':
            const local = localStorage.getItem("favoritos");
            let newDatos = [...state.id, local];

            const favoritos = local ? JSON.parse(local) : [];

            const id = action.payload.id;
            delete favoritos[favoritos.indexOf(id)]
            const filtro = favoritos.filter(id => id);

            console.log(filtro)
            localStorage.setItem("favoritos", JSON.stringify(filtro));
            return {
                ...state,
                isFavorito: action.payload.isFavorito,
                id: newDatos,
            };

        case 'AGREGA_FAVORITOS_LOCAL':
            const local2 = localStorage.getItem("favoritos");
            const DatosLocal = [...state.id, local2];
            const favoritos2 = local2 ? JSON.parse(local2) : [];
            favoritos2.push(action.payload.id);
            // Guardar la matriz en el localStorage como una cadena
            localStorage.setItem("favoritos", JSON.stringify(favoritos2));
            return {
                ...state,
                isFavorito: action.payload.isFavorito,
                id: DatosLocal,
            };
        default:
            return state;
    }
};

export default ReducerFavoritos;