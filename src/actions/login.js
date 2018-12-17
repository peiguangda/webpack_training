import {LOGIN_SUCCESS} from "../core/constants";
import {LOGIN_FAILURE} from "../core/constants";
import axios from 'axios';
const qs = require('qs');
const Cookies = require('js-cookie');

const apiUrl = 'http://localhost:8000';

export const login = (email, password) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/login`, qs.stringify({username: email, password: password}), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
            }
        })
            .then(response => {
                if (response.data.success === true) {
                    dispatch(loginSuccess(response));
                } else {
                    dispatch(loginFail());
                }
            })
            .catch(error => {
                throw(error);
            });
    };
};

export function loginSuccess(response) {
    Cookies.set('email', response.data.email);
    Cookies.set('access_token', response.data.token);
    return {
        type: LOGIN_SUCCESS,
        email: response.data.email,
        access_token: response.data.token,
        loading: true
    }
}

export function loginFail() {
    return {
        type: LOGIN_FAILURE,
        loading: true
    }
}