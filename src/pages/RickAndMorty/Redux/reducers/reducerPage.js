const initialState = {
    page: 1
};

const ReducerPage = (state = initialState, action) => {
    switch (action.type) {

        case 'OBTENER_PAGINA':
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};

export default ReducerPage;