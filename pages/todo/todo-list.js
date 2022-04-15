import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'


export default function TodoList(){
    const columns = ["Userid", "Task", "Completed"]
    const [data, setData] = useState([]);
    const count = data.length;
    useEffect(() => {
        axios.get('http://localhost:5000/api/todo/list')
        .then(res => {
            setData(res.data.todos)
        }).catch(err => {})
    },[])

    return(
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={3}><h1>스케줄목록</h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {columns.map((column, index) =>(
                    <td key={index}>{column}</td>
                ))}
            </tr>
            { data.length == 0 ?<tr>
                    <td colSpan={6} >일정이 없습니다</td>
                    </tr>
            :data.map((todo) => (
                <tr key={todo.userid}>
                        <td >
                    <Link href={{pathname:`/todo/[userid]`,
                            query:{selectedUser: 'test'}}} as={`/todo/${todo.userid}`}>
                        <a>{todo.userid}</a>
                    </Link>
                    </td>
                <td >{todo.task}</td>
                <td >{todo.completed}</td>
                </tr>
            ))}
        </tbody>
        </table>
    )
}
