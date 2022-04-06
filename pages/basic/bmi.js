import axios from "axios";
import React, {useState} from "react"

export default function Bmi (){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})
   
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/basic/bmi', inputs)
        .then(res => {
            const bmi = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>이름: ${bmi.name}</h3>
            <h3>키: ${bmi.height}</h3>
            <h3>몸무게: ${bmi.weight}</h3>
            <h3>BMI결과: ${bmi.bmi}</h3>
            `
        })
        .catch(err => alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit} >
            <h1>BMI 폼</h1>
                <div>
                    <label><b>name</b></label>
                    <input name="name" type="text" onChange={handleChange}/><br/>
                    <label><b>height</b></label>
                    <input name="height" type="text" onChange={handleChange}/><br/>
                    <label><b>weight</b></label>
                    <input name="weight" type="text" onChange={handleChange}/><br/>
                    <input type="submit" value="BMI 체크" /><br/>
                </div>
        </form>
        <div>결과: <span id='result-span'> </span> </div>
    </div>)
}