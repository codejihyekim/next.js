import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/style/table.module.css'
import Link from 'next/link'
import todoReducer from '../../redux/reducers/todoReducer.ts';

const Table = ({columns, colspan , data}) => {

    return(
        <table className={tableStyles.table}>
        <thead> 
                <tr className={tableStyles.tr}> 
                    {columns.map((column, index) => (
                        <th key={index} className={tableStyles.td}>{column}</th>
                    ))}
                </tr>
        </thead>
        <tbody>
                { data.length == 0 ?<tr className={tableStyles.tr}>
                            <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다</td>
                            </tr>
                :data.map((user) => (
                    <tr className={tableStyles.tr} key={todo.checkbox}>
                        <td className={tableStyles.td}>
                            <Link href={{pathname:`/todo/[checkbox]`,
                                    query:{selectedUser: 'test'}}} as={`/todo/${todo.checkbox}`}>
                                <a>{todo.checkbox}</a>
                            </Link>
                        </td>
                        <td className={tableStyles.td}>{todo.checkbox}</td>
                        
                    </tr>
                ))}
        </tbody>
        </table>
    );
}

export default function TodoList(){
    const columns = ["checkbox"]
    const [data, setData] = useState([]);
    const count = data.length;
    useEffect(() => {
        axios.get('http://localhost:5000/api/todo/list')
        .then(res => {
            setData(res.data.users)
        }).catch(err => {})
    },[])

    return(<>
        <h1 >스케줄목록</h1>
        {count !=0 && <h3 className={tableStyles.td}>할일: {count} 개</h3>}
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={1} data={data}/> 
        </div>
        </>
    )
}
