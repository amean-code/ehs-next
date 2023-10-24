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

const delete_item = (token,body) => {
    return fetch(`${Config.ServerAPI}/api/form/delete-item-from-form/`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ehs_token: token
        },
        method: 'POST',
        body: body
    });
}

export default { get_form, fill_form, delete_item }