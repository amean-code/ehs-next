import Config from "../config";

const login = (config) => {
    return fetch(`${Config.ServerAPI}/auth/login`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        ...config
    });
}

const send_verify_code = (config) => {
    return fetch(`${Config.ServerAPI}/auth/send-verify-code`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        ...config
    });
}

const reset_password = (config) => {
    return fetch(`${Config.ServerAPI}/auth/reset-password`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        ...config
    });
}

const register = (config) => {
    ////console.log("OATH : ",`${Config.ServerAPI}/auth/register`)
    return fetch(`${Config.ServerAPI}/auth/register`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        ...config
    });
}

const verifyMail = (config) => {
    return fetch(`${Config.ServerAPI}/auth/verify-code`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        ...config
    });
}


export default { login, register, verifyMail, send_verify_code, reset_password }