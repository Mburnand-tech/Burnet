import { useContext, useState } from 'react'
import { UserContext } from './contexts/UserContext'

import React from "react"

import { getUser } from './utils'

import LoggedInSwitch from './LoggedInSwitch'
import LoginForm from './LoginForm'

const User = ({isLoggedIn, setIsLoggedIn}) => {
    const [currentUser, setCurrentUser] = useState(UserContext._currentValue.currentUser)
    const [logInPortal, setLogInPortal] = useState(false)

    return (
        <div>
            <LoggedInSwitch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setLogInPortal={setLogInPortal}/>
            <LoginForm setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} logInPortal={logInPortal} setLogInPortal={setLogInPortal} />
        </div>
    )
}

export default User