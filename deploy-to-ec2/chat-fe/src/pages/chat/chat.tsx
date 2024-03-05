/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'
import { ApiService } from '../../service/index'

function Chat(props: any) {
    const location = useLocation()
    const [userData, setUserData] = useState<any>(location?.state?.user_data)
    console.log('userData >>>>>>>>', location)
    const [users, setUsers] = useState<any[]>([])
    const getUserList = async () => {
        const URL: string = `/list-user?query={$ne: ${userData?.email}}`
        const res = await ApiService(URL, {}, { method: 'GET', headers: { 'Contenty_Type': 'application/json' } })
        setUsers(res)
    }

    const listClick = (index: number) => {
        const tempUser: any[] = users?.map(m => m.bgColor = '')
        tempUser[index].bgColor =  'blue'
        console.log('listClick on click ', tempUser)
        setUsers([...tempUser])
    }

    console.log('users >>>>>>>>', users)
    useEffect(() => {
        getUserList()
    }, [])

    return <>
        <div className="chat_container">

            <div className='chat_container_head'>Welocome: <b><i>{userData?.username}</i></b></div>
            <div className='chat_container_body'>
                <div className='chat_user_list'>

                    <ul>
                        {users.map((m: any, i: number) => (<li key={i} style={{ backgroundColor: m?.bgColor ? m?.bgColor : ''}} onClick={() => listClick(i)}><h5>{m?.username}</h5></li>))}
                    </ul>
                </div>
                <div className='chatting_section'> </div>
            </div>
        </div>
    </>
}

export default Chat