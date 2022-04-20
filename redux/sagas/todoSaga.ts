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
        yield put(todoActions.addTodoSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.addTodoFailure(error))
    }
}

function* getTodo(todo: TodoType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(todo))
        const response : TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.getTodoSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.getTodoFailure(error))
    }
}

function* modifyTodo(todo: TodoType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(todo))
        const response : TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.modifyTodoSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.modifyTodoFailure(error))
    }
}

function* removeTodo(todo: TodoType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(todo))
        const response : TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.removeTodoSuccess(response))
    } catch(error){
        alert('진행 3: saga 내부 join 실패')
        yield put(todoActions.removeTodoFailure(error))
    }
}

export function* watchAddTodo(){
    yield takeLatest(todoActions.addTodoRequest, addTodo)
}
export function* watchGetTodo(){
    yield takeLatest(todoActions.getTodoRequest, getTodo)
}
export function* watchModifyTodo(){
    yield takeLatest(todoActions.modifyTodoRequest, modifyTodo)
}
export function* watchRemoveTodo(){
    yield takeLatest(todoActions.removeTodoRequest, removeTodo)
}