import { createSlice } from "@reduxjs/toolkit";

export interface BoardType{

}

export interface BoardState{
    loading: boolean;
    data: BoardType[];
    error: any;
}
const initialState: BoardState = {
    loading:false,
    data: [],
    error: null
}

const boardSlice = createSlice({
    name:'boards',
    initialState,
    reducers:{
        joinRequest(state: BoardState, payload){
            alert('진행2 : 리듀서 내부')
            state.loading = true;
        },
        joinSuccess(state: BoardState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        joinFailure(state: BoardState, {payload}){
            state.data = payload;
            state.loading = false;
        }
        
    }
})

const {reducer, actions} = boardSlice
export const boardActions = actions
export default reducer
