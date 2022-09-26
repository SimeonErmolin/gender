import {createSlice} from "@reduxjs/toolkit";
import {searchCountry, searchGender} from "../modules for gender/network.js";

const initialState = {
    userName: '',
    gender: 'Нигер',
    country: 'Бездомный',
    warning: ''
}

const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {
        changeName(state, action) {
            state.userName = action.payload
        },
        gender(state, action) {
            state.gender = action.gender
        },
        country(state, action) {
            state.country = action.country
        },
        warning(state, action) {
            state.warning = action.warning
        },
    },
    extraReducers: {
        [searchGender.fulfilled]: function (state, action) {
            state.gender = action.payload
            state.warning = ''
        },
        [searchCountry.fulfilled]: function (state, action) {
            state.country = action.payload
            state.warning = ''
        },
        [searchGender.rejected]: function (state) {
            state.gender = ''
            state.country = ''
            state.warning = 'error!'
        }
    }
});

export const {changeName} = genderSlice.actions
export default genderSlice.reducer