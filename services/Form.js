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

const mentoring_process_general_information_form = (token,body) => {
    return fetch(`${Config.ServerAPI}/api/form/mentoring-process-general-information-form/`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ehs_token: token
        },
        method: 'POST',
        body: body
    });
}

const post_mentoring_process = (token,body) => {
    return fetch(`${Config.ServerAPI}/api/form/post-mentoring-process/`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ehs_token: token
        },
        method: 'POST',
        body: body
    });
}

const mentoring_process_detailed_information_form = (token,body) => {
    return fetch(`${Config.ServerAPI}/api/form/mentoring-process-detailed-information-form/`, {
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

export default { get_form, fill_form, delete_item, mentoring_process_general_information_form, mentoring_process_detailed_information_form, post_mentoring_process }