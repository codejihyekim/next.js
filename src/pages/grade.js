import React, {useState} from "react"
export default function Grade(){
    const [name, setName] = useState("")
    const [korscore, setKorscore] = useState(0)
    const [engscore, setEngscore] = useState(0)
    const [mathscore, setMathscore] = useState(0)
    const [result, setResult] = useState(0)
    const Grade =()=>{
        let name = (document.getElementById('name')).value
        let korscore = (document.getElementById('korscore')).value
        let engscore = (document.getElementById('engscore')).value
        let mathscore = (document.getElementById('mathscore')).value
        setName(name)
        setKorscore(korscore)
        setEngscore(engscore)
        setMathscore(mathscore)
        setResult(Number(name), Number(korscore), Number(engscore), Number(mathscore))
    }

    return (<><h1>Grade 폼</h1>
    <div>
        <lable><b>name</b></lable>
        <input id="name"/><br/>
        <lable><b>korscore</b></lable>
        <input id="korscore"/><br/>
        <lable><b>engscore</b></lable>
        <input id="engscore"/><br/>
        <label><b>mathscore</b></label>
        <input id="mathscore"/><br/>
        <button onClick={()=>{Grade()}}>확인</button>
        <div>결과: 이름: {name} 국어: {korscore} {engscore} {mathscore} </div>
    </div>
    </>)
} 