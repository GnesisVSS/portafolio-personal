import { combineReducers } from "redux";
import ReducerDetalles from "./reducerDetalles";
import ReducerFavoritos from "./reducerFavoritos";
import ReducerId from "./reducerId";
import ReducerPage from "./reducerPage";
import ReducerFavoritosLocal from "./reducerFavoritosLocal";

export const rootReducer = combineReducers(
    {
        // Recibe el state name : reducer que lo va a controlar
        detallesState: ReducerDetalles,
        favoritosState: ReducerFavoritos,
        idState: ReducerId,
        pageState: ReducerPage,
        favoritosLocalState : ReducerFavoritosLocal

    }
)