import { testEmailRegex } from 'data/Regex';

export const MESSAGE_OPTIONS = [
    { label: 'Błąd', value: 0 },
    { label: 'Współpraca', value: 1 },
];

export const ACTIONS = {
    INPUT: 'input',
    FILES: 'files',
    MESSAGE_CATEGORY: 'messageCategory',
    VALID_EMAIL: 'validEmail',
    ERROR: 'error',
    SUCCESS: 'success',
    FOCUS: 'focus',
};

export const INITIAL_STATE = {
    input: {
        email: '',
        name: '',
        message: '',
    },
    messageCategory: 0,
    focus: {
        email: false,
        name: false,
        message: false,
    },
    validEmail: false,
    files: [],
    errMsg: [false, ''],
    success: false,
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTIONS.MESSAGE_CATEGORY:
            return {
                ...state,
                messageCategory: action.payload,
            };
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTIONS.VALID_EMAIL:
            return {
                ...state,
                validEmail: testEmailRegex(action.payload),
            };
        case ACTIONS.FILES:
            return {
                ...state,
                files: action.payload,
            };

        case ACTIONS.ERROR:
            return {
                ...state,
                errMsg: action.payload,
            };

        case ACTIONS.SUCCESS:
            return {
                ...state,
                success: action.payload,
            };
        default:
            return state;
    }
};
