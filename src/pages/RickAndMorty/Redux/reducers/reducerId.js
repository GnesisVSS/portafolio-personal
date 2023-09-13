const initialState = {
    id: 0
};

const ReducerId = (state = initialState, action) => {
    switch (action.type) {
        
        case 'VISUALIZAR_DATOS_DETALLES':
            const newDatosId = action.payload;
            // se le asigna el arreglo de datos al localstorage
            localStorage.setItem("datosId", newDatosId);
            return {
                ...state,
                id: action.payload
            };
        default:
            return state;
    }
};

export default ReducerId;