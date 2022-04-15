import { createSlice } from "@reduxjs/toolkit";

export interface TodoType{
    userid: string;
    task: string;
    completed: string; //value is T or F
}

export interface TodoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null  
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        joinRequest(state: TodoState, payload){
            alert('진행 2: 리듀서 내부')
            state.loading = true;
        },
        joinSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        joinFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
    
})

const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer