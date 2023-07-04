import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
    name: 'Auth',
    initialState: {
        user: {},
        loginStatus: false
    },
    reducers: {
        login: (state , action) => {
            state.user = action.payload;
            state.loginStatus = true
        },
        logout: (state, action) => {
            state.loginStatus = false
        }
    }
})

const { login , logout } = Auth.actions
const authReducer = Auth.reducer
export default authReducer;