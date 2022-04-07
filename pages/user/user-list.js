import tableStyles from '../common/style/table.module.css'

const Table = ({ columns, colspan ,data}) => {
    return(
        <table className={tableStyles.table}>
            <thead> 
                {/** <th key={column} className={tableStyles.td}>{column}</th>*/}
                <tr className={tableStyles.tr}> 
                    {columns.map((column) => (
                        <th key={column} className={tableStyles.td}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr className={tableStyles.tr}>
                        { data.length == 0 ?<td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다</td>
                        :<td colSpan={colspan} className={tableStyles.td}>데이터가 있습니다</td>}
                </tr>
            </tbody>
        </table>
    );
}

export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const data = [];
    const count = data.length;
    
    return(<>
        <h1 >사용자 목록</h1>
        {count !=0 && <h3 className={tableStyles.td}>회원수: 지혜바보 {count} 명</h3>}
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
    )
}