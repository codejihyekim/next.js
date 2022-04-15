import Head from "next/head"
import tableStyles from "../common/styles/table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

export default function BoardList(){
    const columns = ["글번호", "제목", "작성자", "주제"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
            axios.get('http://localhost:5000/api/board/list').then(res=>{
                setData(res.data.boards)
        }).catch(err=>{})
    }, [])
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr><th colSpan={4}><h2>게시판</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td key={column} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ? <tr >
                    <td colSpan={4} >게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.title}>
                            <td >{board.title}</td>
                            <td >{board.name}</td>
                            <td >{board.teamId}</td>
                            <td >{board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}