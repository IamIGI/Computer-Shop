import { testEmailRegex, testNameRegex, testPasswordRegex } from 'data/Regex';

export const INITIAL_STATE = {
    input: {
        password: '',
        editedField: '',
        repeatPassword: '',
    },
    validEditedField: false,
    focus: {
        password: false,
        editedField: false,
        repeatPassword: false,
    },
    isCapsLock: false,
    badPassword: false,
};

export const ACTIONS = {
    INPUT: 'input',
    VALID_EDITED_FIELD: 'valid',
    FOCUS: 'focus',
    CAPS_LOCK: 'isCapsLock',
    BAD_PASSWORD: 'badPassword',
};

export const popUpAccountSettingsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTIONS.VALID_EDITED_FIELD:
            let isFieldValid = false;
            switch (action.payload.name) {
                case 'email':
                    isFieldValid = testEmailRegex(action.payload.value);
                    break;
                case 'hashedPassword':
                    isFieldValid = testPasswordRegex(action.payload.value);
                    break;
                case 'firstName':
                    isFieldValid = testNameRegex(action.payload.value);
                    break;
                case 'lastName':
                    isFieldValid = testNameRegex(action.payload.value);
                    break;
                default:
                    console.log('given name is not supported ');
                    break;
            }
            return {
                ...state,
                validEditedField: isFieldValid,
            };
        case ACTIONS.CAPS_LOCK:
            return {
                ...state,
                isCapsLock: action.payload.getModifierState('CapsLock'),
            };
        case ACTIONS.BAD_PASSWORD:
            return {
                ...state,
                badPassword: action.payload,
            };
        default:
            return state;
    }
};
