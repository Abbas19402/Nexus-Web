import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice = createSlice({
    name: 'layoutSwitch',
    initialState: {
        layout: 'core'
    },
    reducers: {
        SWITCH_LAYOUT: (state, action) => {
            console.log("Layout changed to: ",action.payload)
            state.layout = action.payload
        }
    }
})

export const { SWITCH_LAYOUT } = LayoutSlice.actions;
const layoutReducer = LayoutSlice.reducer
export default layoutReducer