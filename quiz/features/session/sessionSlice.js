import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'authentication',
    initialState: {
        userId: 1,
        username: '',
    },
    reducers: {
        increment: (state) => ({...state, userId: state.userId + 1})
    }
})

export const { increment } = slice.actions;

export default slice.reducer;