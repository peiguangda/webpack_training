import {LOGOUT} from "../core/constants";

const Cookies = require('js-cookie');

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutSuccess());
        //xoa ben server nua
    };
};

export function logoutSuccess() {
    Cookies.remove('access_token');
    return {
        type: LOGOUT,
        loading: true
    }
}
