import React, {useState} from "react"

export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const sum=()=>{
        let num1 = (document.getElementById('num1')).value
        let num2 = (document.getElementById('num2')).value
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1)+Number(num2))
    }
    return (
        <><h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input id="num1"/><br/>
            <label><b>opcode</b></label>
            <select name="" id="">
                <option value="">+</option>
                <option value="">-</option>
                <option value="">*</option>
                <option value="">/</option>
                <option value="">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input id="num2"/><br/>
            <button onClick={()=>{sum()}}>더하기 실행</button>
            <div> {num1}+{num2}={result}</div>
    </div>
    </>

    )
} 