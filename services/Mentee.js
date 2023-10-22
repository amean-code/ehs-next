import Config from "../config";

const update_mentee = (id,body) => {
    return fetch(`${Config.ServerAPI}/api/mentee/update/`+id, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: body
    });
}

export default { update_mentee }