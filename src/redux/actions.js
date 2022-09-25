import {searchName} from "../modules for gender/network.js";

export const typesOfActions = {
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_GENDER: 'CHANGE_GENDER',
    CHANGE_COUNTRY: 'CHANGE_COUNTRY',
    CHANGE_WARNING: 'CHANGE_WARNING'
}

function warning(warning) {
    return {
        type: typesOfActions.CHANGE_WARNING,
        warning
    }
}

export function userName(name) {
    return {
        type: typesOfActions.CHANGE_NAME,
        name
    }
}

export function gender(data){
    return {
        type: typesOfActions.CHANGE_GENDER,
        gender: data.gender,
    }
}

export function country(data) {
    return {
        type: typesOfActions.CHANGE_COUNTRY,
        country: data
    }
}

export function getNameData(name) {
    return function (dispatch) {
        searchName(name).then(data => dispatch(gender(data)))
        searchName(name, true).then(data => {
            if (data === "Cannot read properties of undefined (reading 'country_id')") {
                dispatch(warning('Введи нормальное имя'));
                dispatch(country(''))
            } else {
                dispatch(country(data))
                dispatch(warning(''))
            }
        })
    }
}