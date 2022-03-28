import React, { useState } from "react"
export default function Bmi(){

    const [name, setName] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState(0)

    const Bmi =()=>{
        let name = (document.getElementById('name')).value
        let height = (document.getElementById('height')).value
        let weight = (document.getElementById('weight')).value
        setName(name)
        setHeight(height)
        setWeight(weight)
        setResult(Number(name), Number(height), Number(weight))
    }
    return(<><h1>BMI 폼</h1>
        <div>
            <label><b>name</b></label>
            <input id="name"/><br/>
            <label><b>height</b></label>
            <input id="height"/><br/>
            <label><b>weight</b></label>
            <input id="weight"/><br/>
            <button onClick={()=>{Bmi()}}>확인</button>
            <div>결과: 이름 {name} 키 {height} 몸무게 {weight}</div>
        </div>
        </>)
    } 