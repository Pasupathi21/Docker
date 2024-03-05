/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { ApiService } from '../../service/index'

function AddEditUser(props: any) {

    const [formData, setFormData] = useState<any>({
        username: null,
        email: null
    })

    const submit = async (event: any) => {
        event?.preventDefault()
        console.log('formData >>>>>>>>>>>>>>', formData)
        if(formData?.username && formData?.email){
            const response = await ApiService('/create-user', formData, {
                method: 'POST',
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                },
                // referrerPolicy: "no-referrer",
            })
            console.log('response >>>>>>>>>>>>>>', response)
        }
        alert('username and email is required')
    }

    return <>


        <form onSubmit={submit}>
            <div style={{ textAlign: 'center', color: 'white'}}>

                <h2>Add User</h2>
            </div>
            <div>

                <label htmlFor="">User Name*: </label>
                <input type="text" value={formData?.username} onChange={(e) => setFormData({ ...formData, username: e?.target?.value})} />
            </div>
            <div>
                <label htmlFor="">Email*: </label>
                <input type="email" value={formData?.email} onChange={(e) => setFormData({ ...formData, email: e?.target?.value})} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>

    </>
}

export default AddEditUser