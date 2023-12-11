import Config from "../config";

const create_form = (body) => {

    return fetch(`${Config.StrapiAPI}/api/teams`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            data: body
        })
    });
}

const update_form = (id,body) => {

    return fetch(`${Config.StrapiAPI}/api/teams/`+id, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            data: body
        })
    });
}

const add_presentaion = (id,file) => {
    var formdata = new FormData();
    formdata.append("ref", "api::team.team");
    formdata.append("refId", id);
    formdata.append("field", "presentation");
    formdata.append("files", file, file.name);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Config.StrapiAPI}/api/upload`, requestOptions)
}

const create_member = (body) => {


    return fetch(`${Config.StrapiAPI}/api/team-members`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            data: body
        })
    });
}

const create_team_feedback = (body) => {


    return fetch(`${Config.StrapiAPI}/api/team-feedbacks`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            data: body
        })
    });
}

export default { create_form, add_presentaion, create_member, create_team_feedback, update_form }