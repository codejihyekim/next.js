import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../redux/reducers/todoReducer.ts'

export default function AddTodo() {
    const [todo, setTodo] = useState({
      userid: '', task: '', completed: ''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]:value})
    }

  return (
     <div className="todoapp stack-large">
      <h1>일정등록</h1>
      <form onSubmit={ 
        e => {
          e.preventDefault()
          alert('진행1: 일정클릭');
          dispatch(todoActions.joinRequest(todo))
          setTodo({
            userid: '', task: '', completed: ''
          })
      }
    }>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <label><b>사용자ID</b></label>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="userid"
          autoComplete="off"
          onChange={handleChange}
        />
        <br/>
        <label><b>일정</b></label>
        <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="task"
        autoComplete="off"
        onChange={handleChange}
      /><br/>
        <label><b>일정완료</b></label>
        <select name="completed" onChange={handleChange}>
                <option value="T">T</option>
                <option value="F">F</option>
        </select>
        <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      {/**
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
              setCheck(!check)
            }}/>
            <label className="todo-label" htmlFor="todo-0">
              운동 24시간 하기
            </label>
            { check ? <Image class="rotate-center"
            style={{ visibility: "visible", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />
            :<Image
            style={{ width: '6%', visibility: "hidden", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />}
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
      </ul>*/}
    </div>
  );
}