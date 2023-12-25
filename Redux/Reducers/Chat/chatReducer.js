import { createSlice } from "@reduxjs/toolkit";

const Chat = createSlice({
    name: "Chat",
    initialState: {
        activeUser: {}
    },
    reducers: {
        SET_ACTIVE_CHAT_USER: (state, action) => {
            state.activeUser = action.payload
        },
        SET_CHAT_INACTIVE: state => {
            state.activeUser = {}
        }
    }
})

export const { SET_ACTIVE_CHAT_USER, SET_CHAT_INACTIVE } = Chat.actions
const chatReducer = Chat.reducer
export default chatReducer