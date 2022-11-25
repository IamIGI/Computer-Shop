export const INITIAL_STATE = {
    input: {
        pwd1: '',
        pwd2: '',
    },
    focus: {
        pwd1: '',
        pwd2: '',
    },
    isCapsLock: false,
};

export const ACTIONS = {
    INPUT: 'input',
    FOCUS: 'focus',
    CAPS_LOCK: 'isCapsLock',
};

export const popUpAccountDeleteReducer = (state, action) => {
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
        case ACTIONS.CAPS_LOCK:
            return {
                ...state,
                isCapsLock: action.payload.getModifierState('CapsLock'),
            };
        default:
            return state;
    }
};
