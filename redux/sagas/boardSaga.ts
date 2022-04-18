import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {boardActions} from '../../redux/reducers/boardReducer.ts'
import { postBoard } from  '../api/boardApi'

interface BoardJoinType{
    type: string;
    payload:{
        
    }
}
interface BoardJoinSuccessType{
    type: string;
    payload: {
        
    }
}

function* join(board: BoardJoinType){
    try{
        alert('진행 3: saga 내부 join 성공' + JSON.stringify(board))
        const response : BoardJoinSuccessType = yield postBoard(board.payload)
        yield put(boardActions.joinSuccess(response))
    } catch(error){
        alert('진행3: saga 내부 join실패')
        yield put(boardActions.joinFailure(error))
    }
}

export function* watchBoard(){
    yield takeLatest(boardActions.joinRequest, join)
}