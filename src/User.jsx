import { useState } from 'react'
import React from "react"
import './App.css';

import LoggedInSwitch from './LoggedInSwitch'
import LoginForm from './LoginForm'

const User = ({isLoggedIn, setIsLoggedIn}) => {
    const [logInPortal, setLogInPortal] = useState(false)

    return (
        <div className={'App signIn'}>
            <LoginForm setIsLoggedIn={setIsLoggedIn} logInPortal={logInPortal} setLogInPortal={setLogInPortal} />
            <LoggedInSwitch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setLogInPortal={setLogInPortal}/>
            
        </div>
    )
}

export default User