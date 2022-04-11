import axios from "axios";
import React, {useState} from "react"
export default function Login(){
    
    const [inputs, setInputs] = useState({})
    
    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleClick = (e) =>{
        e.preventDefault()
        axios.post('', inputs) 
        .then(res => {})
        .catch(err => alert(err))
    }

   return (<>
    <form>
    <h1>Login 폼</h1>
    <div>
        <label><b>name</b></label>
        <input name="name" onChange={handleChange}/><br/>
        <label><b>userid</b></label>
        <input name="userid" onChange={handleChange}/><br/>
        <label><b>password</b></label>
        <input name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>Login</button>
    </div>
    <label >
        <input />remember me
    </label> 
    <div>
        <button>Cancel</button>
        <span>Forgot<a>password?</a></span>
    </div>
    </form>
    </>)
}