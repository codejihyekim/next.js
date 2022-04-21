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
        addTodoRequest(state: TodoState, payload){
            alert('진행 2: 일정추가 리듀서 내부')
            state.loading = true;
        },
        addTodoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        addTodoFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        },
        getTodoRequest(state: TodoState, payload){
            alert('진행 2: 일정목록 리듀서 내부')
            state.loading = true;
        },
        getTodoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        getTodoFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        },
        modifyTodoRequest(state: TodoState, payload){
            alert('진행 2: 일정수정 리듀서 내부')
            state.loading = true;
        },
        modifyTodoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        modifyTodoFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        },
        removeTodoRequest(state: TodoState, payload){
            alert('진행 2: 일정삭제 리듀서 내부')
            state.loading = true;
        },
        removeTodoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        removeTodoFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
    
})

const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer