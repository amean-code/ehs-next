import Config from "../config";

const get_form = (token) => {
    return fetch(`${Config.ServerAPI}/api/form/get-form/`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ehs_token: token
        },
        method: 'GET'
    });
}

const fill_form = (token,body) => {
    return fetch(`${Config.ServerAPI}/api/form/fill-form/`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ehs_token: token
        },
        method: 'POST',
        body: body
    });
}

export default { get_form, fill_form }