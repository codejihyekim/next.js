import { takeLatest, all, put } from 'redux-saga/effects'
import  { watchJoin } from "./userSaga.ts";
import { watchAddTodo } from './todoSaga.ts'

export default function* rootSaga() {
    yield all([watchJoin(), watchAddTodo()]);
}
