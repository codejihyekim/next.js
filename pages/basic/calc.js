import axios from "axios";
import React, {useState} from "react"

export default function Calc(){
    
    const [inputs, setInputs] = useState({})

    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
           alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert)
    }
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
        <h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input name="num1" type="" onChange={handleChange}/><br/>
            <label><b>opcode</b></label>
            <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" type="" onChange={handleChange}/><br/>
            <input type="submit" value="계산하기" /><br/>
        </div>
        </form>
        <div>결과: <span id="result-span"></span></div>
        </div>

    )
}
