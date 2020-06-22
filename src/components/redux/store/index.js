import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import counterReducer from "../reducers/counter";
import authReducer from "../reducers/auth";
import userReducer from "../reducers/user";
import filmReducer from "../reducers/films";
import { forbiddenWordsMiddleware } from "../middleware";
import promise from "redux-promise-middleware";

// Global state
const reducers = combineReducers({
    number: counterReducer,
    root: rootReducer,
    auth: authReducer,
    user: userReducer,
    film: filmReducer
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, promise))
);

export default store;

// NO ACTIONS FOLDER IN HERE BROO , OJOK LALI 