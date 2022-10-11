import { testEmailRegex, testNameRegex, testPasswordRegex } from 'data/Regex';

export const ACTIONS = {
    VALID: {
        NAME: 'validName',
        EMAIL: 'validEmail',
        PWD: 'validPwd',
        MATCH_PWD: 'validMatchPwd',
    },
    FOCUS: 'focus',
    CHECK_CAPS_LOCK: 'checkCapsLock',
    ERROR_MESSAGE: 'errMsg',
    WAIT_FOR_REGISTER: 'waitForRegister',
};

export const INITIAL_STATE = {
    valid: {
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        matchPwd: false,
    },
    focus: {
        firstName: false,
        lastName: false,
        email: false,
        pwd: false,
        matchPwd: false,
    },
    capsLock: false,
    errMsg: '',
    waitForRegister: false,
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.VALID.NAME:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    [action.payload.name]: testNameRegex(action.payload.value),
                },
            };
        case ACTIONS.VALID.EMAIL:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    email: testEmailRegex(action.payload),
                },
            };
        case ACTIONS.VALID.PWD:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    pwd: testPasswordRegex(action.payload),
                },
            };
        case ACTIONS.VALID.MATCH_PWD:
            return {
                ...state,
                valid: {
                    ...state.valid,
                    matchPwd: action.payload.pwd === action.payload.matchPwd,
                },
            };
        //focus
        case ACTIONS.FOCUS:
            return {
                ...state,
                focus: {
                    ...state.focus,
                    [action.payload.name]: action.payload.value,
                },
            };
        //caps lock
        case ACTIONS.CHECK_CAPS_LOCK:
            if (action.payload.getModifierState('CapsLock')) {
                return {
                    ...state,
                    capsLock: true,
                };
            }
            return {
                ...state,
                capsLock: false,
            };
        //error Message
        case ACTIONS.ERROR_MESSAGE:
            return {
                ...state,
                errMsg: action.payload,
            };

        case ACTIONS.WAIT_FOR_REGISTER:
            return {
                ...state,
                waitForRegister: action.payload,
            };
        default:
            return state;
    }
};
