import {CHECK_FIRST_STEP, SET_FIRST_STEP} from "../actions/RegisterActions";

const initialState = {
    firstStep: {
        email: '',
        username: '',
        password: '',
        repeat: '',
        isValid: false,
        error: {
            hasError: false,
        },
    },
    checking: false,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_FIRST_STEP:
            return {
                ...state,
                checking: true,
            }
        case SET_FIRST_STEP:
            return {
                ...state,
                checking: false,
                firstStep: action.payload,
            }
        default:
            return state;
    }
}

export default registerReducer;
