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
           alert(`결과: ${JSON.stringify(res.data)}`)
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
        
    </div>)
}