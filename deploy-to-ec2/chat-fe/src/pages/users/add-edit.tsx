import { useState } from 'react'

function AddEditUser(props: any) {

    const [formData, setFormData] = useState<any>({
        username: null,
        email: null
    })

    const submit = () => {
        if(formData?.username && formData?.email){
            // 
        }
        alert('username and email is required')
    }

    return <>


        <form >
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
                <button type='submit' onClick={() => submit()}>add</button>
            </div>
        </form>

    </>
}

export default AddEditUser