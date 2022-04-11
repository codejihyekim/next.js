import {combineReducers} from 'redux'
import adminReducer from './admin.reducer'
import basicReducer from './basic.reducer'
import boardReducer from './board.reducer'
import todoReducer from './todo.reducer'
import userReducer from './user.reducer'
import gameReducer from './game.reducer'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    boardReducer, 
    todoReducer,
    userReducer,
    gameReducer
})

export default rootReducer