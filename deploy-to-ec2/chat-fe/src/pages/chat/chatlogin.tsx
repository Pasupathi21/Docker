/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { ApiService } from '../../service/index'

function ChatLogin() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState<any>({
        email: ''
    })
    const login = async (event: any) => {
        event.preventDefault()
        try {
            const res: any = await ApiService('/login-chat', formData, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!res.status){
                alert(res.message)
                return 
            } 
            console.log('res user data >>>', res)
            navigate('/chat-home', { state: {user_data: res?.data }})
        } catch (e) {
            console.log('error',e)
        }
    }

    return <>


        <form onSubmit={login}>
            <div style={{ textAlign: 'center', color: 'white' }}>

                <h2>Sign In</h2>
            </div>

            <div>
                <label htmlFor="">Email: </label>
                <input type="email" value={formData?.email} onChange={(e) => setFormData({ ...formData, email: e?.target?.value })} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>

    </>
}

export default ChatLogin