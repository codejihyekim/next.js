import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
import { postTodo } from '../api/todoApi.ts'

interface TodoJoinType{
    type: string;
    payload:{
        userid: string, task: string, completed: string 
    }
}

interface TodoJoinSuccessType{
    type: string;
    payload: {
        userid: string 
    }
}

function* join(todo: TodoJoinType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(todo))
        const response : TodoJoinSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.joinSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.joinFailure(error))
    }
}

export function* watch(){
    yield takeLatest(todoActions.joinRequest, join)
}