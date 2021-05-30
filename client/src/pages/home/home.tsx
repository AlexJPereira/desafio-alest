import React, { useState } from 'react'

import { firebaseAuth } from '../../services/firebaseApi'
import { hasLocalToken } from '../../services/localStorage'


export default function Home(){

    const [userName, setUserName] = useState('')
    const [userPic, setUserPic] = useState('')

    if(hasLocalToken())
        firebaseAuth().then(userResponse=>{
            setUserName(userResponse.name || '')
            setUserPic(userResponse.picture || '')
        })

    async function login(){
        const newUser = await firebaseAuth()
        setUserName(newUser.name || '')
        setUserPic(newUser.picture || '')
    }

    return (
        <div>
            <h1>ola {userName}</h1>
            <button onClick={login}>login com google</button>
        </div>
    )
}
