import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const boardSlice = createSlice({
    name:'boards',
    initialState,
    reducers:{
        addBoard: (state, action) => {
            alert('리듀서에 들어올 Board는? ' +JSON.stringify(action))
        }
    }
})
export const { addBoard } = boardSlice.actions

export default boardSlice.reducer
