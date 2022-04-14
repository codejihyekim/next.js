import {combineReducers} from 'redux'
import adminReducer from './adminReducer.ts'
import basicReducer from './basicReducer.ts'
import boardReducer from './boardReducer.ts'
import todoReducer from './todoReducer.ts'
import userReducer from './userReducer.ts'
import gameReducer from './gameReducer.ts'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    boardReducer, 
    todoReducer,
    userReducer,
    gameReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>