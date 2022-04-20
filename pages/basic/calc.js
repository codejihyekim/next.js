import axios from "axios";
import React, { useState } from "react";
import tableStyles from '../common/styles/table.module.css'
export default function Calc() {
    const [inputs, setInputs] = useState({})
    const proxy = 'http://localhost:5000'

    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(proxy+'/basic/calc', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>${calc.num1} ${calc.opcode} ${calc.num2} = ${calc.res}</h3>`
        })
        .catch(err => alert(err))
    }

    return (<form >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th><h2>계산기</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
        <td>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={handleChange} /> 

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={handleChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={handleChange} /><br />

            <button onClick={handleSubmit}>계산하기</button></td>
            </tr>
            <tr><td>결과: <span id="result-span"></span></td></tr>
                </tbody>
            </table>
        </form>)
}