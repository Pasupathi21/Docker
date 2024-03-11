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
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const  [messageHistroy, setMessageHistory] = useState<any[]>([])
    const [inputMessage, setInputMessage] = useState<string>('')

    const getUserList = async () => {
        const URL: string = `/list-user?query={$ne: ${userData?.email}}`
        const res = await ApiService(URL, {}, { method: 'GET', headers: { 'Contenty-Type': 'application/json' } })
        setUsers(res)
    }
    const getMessageList = async () => {
        const URL = '/get-message-list-by-user'
        const payload = {
            from: userData._id,
            to: selectedUser._id
        }
        const res = await ApiService(URL, payload, { method: 'POST', headers: { 'Contenty-Type': 'application/json' } })
        setMessageHistory(res)
    }

    const listClick = (index: number) => {
        const tempUser: any[] = users?.map(m => ({...m, bgColor: ''}))
        console.log('tempUser >>>>>>>>>>', tempUser)
        tempUser[index].bgColor = 'rgba(199, 209, 245, 0.5)'
        console.log('listClick on click ', tempUser)
        setSelectedUser(tempUser[index])
        setUsers([...tempUser])
    }

    const sendMessage = async () => {
        const payload = {
            from: userData?._id,
            to: selectedUser?._id,
            message: inputMessage
        }
        if(selectedUser && inputMessage){
            const URL = '/send-message'
            const res = await ApiService(URL, payload, { method: 'POST', headers: { 'Contenty_Type': 'application/json' } })
            setInputMessage('')
            getMessageList()
        }

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
                        {users.map((m: any, i: number) => (<li key={i} style={{ backgroundColor: m?.bgColor ? m?.bgColor : '' }} onClick={() => listClick(i)}><h5>{m?.username}</h5></li>))}
                    </ul>
                </div>
                <div className='chatting_section__message'>
                    <div className="chatting_section__message__history">
                        <h3>{selectedUser ? selectedUser?.username :  'select any user to chat' }</h3>
                        {/* <ol>

                        {messageHistroy.map(message => (
                            <li></li>
                        ))}
                        </ol> */}
                    </div>
                    <div className="chatting_section__message__input">
                        <input type="text" className="" value={inputMessage} onChange={(event: HTMLInputElement | any) => setInputMessage(event?.target?.value)}/>
                        <button onClick={() => sendMessage()}>send</button>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Chat