import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function ListUsers() {
    const navigate = useNavigate()
    const [tableData, setTableData] = useState<any>([
        {
            username: 'Test 1',
            email: 't@t.com'
        },
        {
            username: 'Test 1',
            email: 't@t.com'
        },
        {
            username: 'Test 1',
            email: 't@t.com'
        },
        {
            username: 'Test 1',
            email: 't@t.com'
        },
        {
            username: 'Test 1',
            email: 't@t.com'
        }
    ])
    return <>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{  textAlign: 'right' }}>
                    <h2>User's List</h2>
                </div>
                <div style={{ width: 'auto'}}>
                    <button type="button" style={{ width: '100px', padding: '5px', background:'rgba(228, 210, 255, 0.8)' }} onClick={()=> navigate('/add-edit-user')}>{'user(+)'}</button>
                </div>

            </div>
            <div>
                <table width="100%" style={{ borderRadius: '10px' }}>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.length > 0 && (
                                tableData.map(m => (
                                    <tr>
                                        <td>
                                            {m?.username}
                                        </td>
                                        <td>
                                            {m?.email}
                                        </td>
                                        <td style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                            <button type="button" onClick={() => navigate(`/add-edit-user/${'hello'}`)}>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export default ListUsers