import React, {useState} from "react"
export default function Login(){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")

    const Login=()=> {
        let name = (document.getElementById('name')).value
        let password = (document.getElementById('password')).value
        setName(name)
        setPassword(password)
        setResult(Number(name), Number(password))
    }
    return <><h1>Login폼</h1>
        <div> 
            <label><b>name</b></label>
            <input id='name'/><br/>
            <label><b>password</b></label>
            <input id='password'/><br/>
            <button onClick={()=>{Login()}}>확인</button>
            <div>이름: {name} 비번: {password}</div>
            <label >
                <input />remember me
            </label> 
            <button>Cancel</button>
            <span>Forgot <a>password?</a></span>
        </div>
        </>
}