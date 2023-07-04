import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice = createSlice({
    name: 'layoutSwitch',
    initialState: {
        layout: 'core'
    },
    reducers: {
        setLayout: (state, action) => {
            state.layout = action.payload
        }
    }
})

export const { setLayout } = LayoutSlice.actions;
const layoutReducer = LayoutSlice.reducer
export default layoutReducer