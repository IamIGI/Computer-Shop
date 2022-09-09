const EMAIL_REGEX =
    /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const NAME_REGEX = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function testEmailRegex(data) {
    return EMAIL_REGEX.test(data);
}

export function testNameRegex(data) {
    return NAME_REGEX.test(data);
}

export function testPasswordRegex(data) {
    return PWD_REGEX.test(data);
}
