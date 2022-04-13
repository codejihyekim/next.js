import axios from "axios";
import style from "board/style/board-form.module.css"
import React, {useState} from "react"
import { useDispatch } from 'react-redux'
import { addBoard } from '../../redux/reducers/board.reducer'

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name, teamId, subject} = inputs;
    const dispatch = useDispatch()
    {/**
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 게시글 : ${JSON.stringify(inputs)}`)
        
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
        })
        .catch(err => alert(err))
    }
    */}
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]:value})
    }

    return (<>
        <h1>게시글</h1>
        <div className={style.container}>
            <form onSubmit={ e => {
                e.preventDefault()
                if(inputs) dispatch(addBoard(inputs))
            }} >
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">글제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} 
                onChange={handleChange}
                id="passengerId" name="title" placeholder="글 제목 입력 "/>
                </div>
            </div>
            
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="" />
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">팀이름</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="K09" selected>Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" 
                placeholder="" style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} 
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}