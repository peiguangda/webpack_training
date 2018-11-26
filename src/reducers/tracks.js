import {SUCCESS} from "../core/constants";

const initialState = {
    data: [
        {
            id: 1,
            title: 'Em của ngày hôm qua'
        },
        {
            id: 2,
            title: 'Cơn mưa ngang qua'
        }
    ]
};

function track(state = initialState, action = {}) {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                result: action.data
            };
        default:
            return {...state}
    }
}

export default track;