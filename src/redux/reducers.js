import {typesOfActions} from "./actions.js";
import {combineReducers} from "redux";

function changeGender(state = {gender: 'Нигер'}, action) {
    switch (action.type) {
        case typesOfActions.CHANGE_GENDER:
            return {
                gender: action.gender,
            }
        default:
            return state
    }
}

function changeCountry(state = {country: 'Бездомный'}, action) {
    switch (action.type) {
        case typesOfActions.CHANGE_COUNTRY:
            return {
                country: action.country,
            }
        default:
            return state
    }
}

function changeName(state = '', action) {
    switch (action.type) {
        case typesOfActions.CHANGE_NAME:
            return {
                name: action.name
            }
        default:
            return state
    }
}

function changeWarning(state = '', action) {
    switch (action.type) {
        case typesOfActions.CHANGE_WARNING:
            return {
                warning: action.warning
            }
        default:
            return state
    }
}

export const genderApp = combineReducers({
    changeGender,
    changeCountry,
    changeName,
    changeWarning
})