import { createSlice } from "@reduxjs/toolkit";


export interface JoinPayload{
    data:{
        user:{
            userid: string;
            phone: string;
            password: string;
            name: string;
            email:string;
            birth:string;
            address:string;
        }
    }
}

export interface UserState{
    userLoading: boolean;
    userData: any;
    error: any;
    token: null;
}

const initialState: UserState ={
    userLoading: false,
    userData: null,
    error: null,
    token: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        joinRequest(state: UserState, action){state.userLoading = true, state.error = null},
        joinSuccess(state, action){state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){state.userLoading = false, state.error = action.payload}
    }
})
const { reducer, actions} = userSlice
export const {
    joinRequest, joinSuccess, joinFailure
} = actions

export default reducer