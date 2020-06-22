import { TV, MOVIES } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const TV_PENDING = `${TV}_${ActionType.Pending}`;
const TV_FULFILLED = `${TV}_${ActionType.Fulfilled}`;
const TV_REJECTED = `${TV}_${ActionType.Rejected}`;

const MOVIES_PENDING = `${MOVIES}_${ActionType.Pending}`;
const MOVIES_FULFILLED = `${MOVIES}_${ActionType.Fulfilled}`;
const MOVIES_REJECTED = `${MOVIES}_${ActionType.Rejected}`;

const filmReducer = (state = initialState, action) => {
switch (action.type) {
    case TV_PENDING:
    case MOVIES_PENDING:
    return {
        ...state,
        loading: true,
    };
    case TV_FULFILLED:
    case MOVIES_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case TV_REJECTED:
    case MOVIES_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default filmReducer;
