import {LOGIN_REQUEST} from "../core/constants";
import {LOGIN_SUCCESS} from "../core/constants";
import {LOGIN_FAILURE} from "../core/constants";
import {LOGOUT} from "../core/constants";

const initialState = {
    loggingIn: false,
    email: "",
};

function authentication(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state};
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggingIn: true,
                email: action.email,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggingIn: false,
            };
        case LOGOUT:
            return {
                ...state,
                loading: false,
                loggingIn: false,
            };
        default:
            return {...state}
    }
}

export default authentication;