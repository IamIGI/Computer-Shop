export const ACTIONS = {
    RATING: 'rating',
    USER_NAME: 'userName',
    OPINION: 'opinion',
    FILES: 'files',
    FILES_ALERT: 'filesAlert',
    SEND_COMMENT: 'sendComment',
    ALERT: 'alert',
    COUNT_CHAR: 'countChar',
    LANGUAGE_VALIDATION: 'languageValidation',
    RESET: 'reset',
    CLEAR_ALERT: 'clearAlert',
};

export const INITIAL_STATE = {
    rating: 0,
    userName: '',
    opinion: '',
    files: [],
    filesAlert: { showAlert: false, message: '' },
    sendComment: false,
    alert: { showAlert: false, userName: '', opinion: '', rating: '' },
    languageValidation: { showAlert: false, message: '' },
    countChar: 0,
};

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case ACTIONS.RATING:
            return {
                ...state,
                rating: action.payload,
            };
        case ACTIONS.SEND_COMMENT:
            return {
                ...state,
                sendComment: action.payload,
            };
        case ACTIONS.OPINION:
            return {
                ...state,
                opinion: action.payload,
            };
        case ACTIONS.FILES:
            return {
                ...state,
                files: action.payload,
            };
        case ACTIONS.FILES_ALERT:
            return {
                ...state,
                filesAlert: {
                    ...state.filesAlert,
                    showAlert: action.payload.showAlert,
                    message: action.payload.message,
                },
            };
        case ACTIONS.ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    showAlert: action.payload.showAlert,
                    [action.payload.key]: action.payload.message,
                },
            };
        case ACTIONS.CLEAR_ALERT:
            return {
                ...state,
                alert: { showAlert: false, userName: '', opinion: '', rating: '' },
            };
        case ACTIONS.COUNT_CHAR:
            return {
                ...state,
                countChar: action.payload,
            };
        case ACTIONS.LANGUAGE_VALIDATION:
            return {
                ...state,
                languageValidation: {
                    ...state.languageValidation,
                    showAlert: action.payload.showAlert,
                    message: action.payload.message,
                },
            };
        case ACTIONS.RESET:
            return {
                INITIAL_STATE,
            };
        default:
            return state;
    }
};
