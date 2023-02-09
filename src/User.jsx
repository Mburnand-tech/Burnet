import { useState } from 'react'
import React from "react"

import LoggedInSwitch from './LoggedInSwitch'
import LoginForm from './LoginForm'

const User = ({isLoggedIn, setIsLoggedIn}) => {
    const [logInPortal, setLogInPortal] = useState(false)

    return (
        <div>
            <LoggedInSwitch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setLogInPortal={setLogInPortal}/>
            <LoginForm setIsLoggedIn={setIsLoggedIn} logInPortal={logInPortal} setLogInPortal={setLogInPortal} />
        </div>
    )
}

export default User