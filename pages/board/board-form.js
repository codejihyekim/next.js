import axios from "axios";
import style from "board/style/board-form.module.css"
import React, {useState} from "react"

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name, teamId, subject} = inputs;
    
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
    return (<>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">PassengerId</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="passengerId" name="passengerId" placeholder=""/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder=""/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
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
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" placeholder="" style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} onClick={handleSubmit}
                value="Submit"/>
            </div>
            </htmlForm>
            </div>
            <div>결과: <span id="result-span"></span> </div>
        
    </>)
}