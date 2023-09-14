const initialState = {
    id: [],
};

const ReducerFavoritosLocal = (state = initialState, action) => {
    switch (action.type) {
        case 'MUESTRA_DATOS_LOCAL':
            return {
                ...state,
                id: [action.payload]
            };
        default:
            return state;
    }
};

export default ReducerFavoritosLocal;