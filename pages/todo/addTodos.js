import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
export default function AddTodo() {
    const [todo, setTodo] = useState({userid: '', task:'', completed:''})
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]: value})
    }
  return (
      <form onSubmit={ e => {
          e.preventDefault()
          dispatch(todoActions.addTodoRequest(todo))
          setTodo({
            userid: '', task: '', completed: ''
          })
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td><label>사용자ID</label></td>
                <td>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="userid"
          autoComplete="off"
          onChange={handleChange}
        />
        </td >
        </tr>
        <tr>
          <td><label>일정</label></td>
          <td>
          <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="task"
          autoComplete="off"
          onChange={handleChange}
        />
        </td>
        </tr>
        <tr>
          <td><label>완료</label></td>
          <td>
          <select id="completed" name="completed" onChange={handleChange}>
                        <option value="T">T</option>
                        <option value="F">F</option>
                    </select>
        </td>
        </tr>
        <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
          Add
        </button>
            
                </tbody>
            </table>
            </form>
     
  );
}