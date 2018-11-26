import {constants} from '../core/constants';

const initialState = {
    data: [
        {
            id: 1,
            title: 'Cham day noi dau'
        },
        {
            id: 2,
            title: 'Neu ta con yeu'
        },
        {
            id: 3,
            title: 'Em lam gi toi nay'
        }
    ]
};

function tracks_backend(state = initialState, action = {}) {
    switch (action.type) {
        // case constants.SEARCH_REQUEST:
        //     return {...state};
        // case constants.SEARCH_SUCCESS:
        //     return {
        //         ...state,
        //         result: action.result
        //     };
        // case constants.SEARCH_FAIL:
        //     return {
        //         ...state,
        //     };
        default:
            return {...state}
    }
}

export default tracks_backend;