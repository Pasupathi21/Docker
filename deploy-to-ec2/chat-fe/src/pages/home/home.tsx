import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    return <>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center'}}>
                <h2>{'Welcom, Dummy chat :}'}  </h2>
            </div>
            <div style={{ display:'flex', flexDirection: 'row', margin: '10px', gap: '10px', justifyContent: 'center'}}>

                <div>
                    <button type="button" style={{ height: '40px', width:'200px', background: 'rgba(197, 180, 249, 0.8)'}} onClick={() =>  navigate('/users-list')}>{'Go to user page ->'}</button>
                </div>
                <div>
                    <button type="button" style={{ height: '40px', width:'200px',background: 'rgba(170, 239, 173, 0.8)'}} onClick={() =>  {}} >Go to chat</button>
                </div>
            </div>
        </div>
    </>
}

export default Home