export const INITIAL_STATE = {
    input: {
        password: '',
        editedField: '',
        repeat_password: '',
    },
    valid: {
        editedField: false,
    },
    focus: {
        field: false,
        password: false,
        matchField: false,
    },
    isCapsLock: false,
    isMatch: true,
    badPassword: false,
};

export const ACTIONS = {
    INPUT: 'input',
    VALID: 'valid',
    FOCUS: 'focus',
    CAPS_LOCK: 'isCapsLock',
    IS_MATCH: 'isMatch',
    BAD_PASSWORD: 'badPassword',
};

export const popUpAccountSettingsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT:
            console.log(`${action.payload.name}: ${action.payload.value}`);
            return {
                ...state,
                input: {
                    ...state.input,
                    [action.payload.name]: action.payload.value,
                },
            };
        default:
            return state;
    }
};
