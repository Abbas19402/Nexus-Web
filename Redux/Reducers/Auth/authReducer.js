import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
    name: 'Auth',
    initialState: {
        user: {},
        loginStatus: false
    },
    reducers: {
        LOGIN: (state , action) => {
            state.user = action.payload;
            state.loginStatus = true
        },
        LOGOUT: state => {
            state.loginStatus = false
            state.user = {}
        }
    }
})

export const { LOGIN , LOGOUT } = Auth.actions
const authReducer = Auth.reducer
export default authReducer;