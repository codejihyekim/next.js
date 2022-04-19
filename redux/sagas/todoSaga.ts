import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
import { addTodoApi } from '../api/todoApi.ts'

interface TodoType{
    type: string;
    payload:{
        userid: string, task: string, completed: string 
    }
}

interface TodoSuccessType{
    type: string;
    payload: {
        userid: string 
    }
}

function* addTodo(todo: TodoType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(todo))
        const response : TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.joinSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.joinFailure(error))
    }
}

export function* watch(){
    yield takeLatest(todoActions.joinRequest, addTodo)
}