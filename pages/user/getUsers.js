import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'

export default function UserList(){
    const columns = ["UserId", "Password", "Email", "Name", "Phone", "Birth", "Address"]
    const [data, setData] = useState([]);
    const count = data.length;
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/list')
        .then(res => {
            setData(res.data.users)
        }).catch(err => {})
    },[])

    return( <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={7}><h1>회원목록</h1></th>
            </tr>
            
        </thead>
        <tbody>
              <tr>
                  {columns.map((column, index) => (
                        <td key={index} >{column}</td>
                  ))}
                </tr>
                { data.length == 0  ?<tr >
                                      <td colSpan={7} >데이터가 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr key={user.userid} >
                  <td >
                    <Link href={{pathname:`/user/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                      <a>{user.userid}</a>
                    </Link>
                  </td>
                  <td >{user.password}</td>
                  <td >{user.email}</td>
                  <td >{user.name}</td>
                  <td >{user.phone}</td>
                  <td >{user.birth}</td>
                  <td >{user.address}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
    );
}
