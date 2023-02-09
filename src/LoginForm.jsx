import React from "react"
import { useState } from "react"
import { useContext } from 'react'
import { getUser } from './utils'
import { UserContext } from './contexts/UserContext'

const LoginForm = ({setIsLoggedIn, logInPortal, setLogInPortal}) => {
    const [ userNameEntry, setUserNameEntry ] = useState('')
    const  {setCurrentUser}  = useContext(UserContext)


    const logInUser = (e) => {
        e.preventDefault()
        getUser(userNameEntry)
        .then((data) => {
            setCurrentUser(data)
            setIsLoggedIn(true)
            setLogInPortal(false)
            setUserNameEntry('')
        })
        .catch((err) => {
            <p>User Not Valid</p>
            console.log(err, "My error handler")
        })
    }

    return (
        <div className={`${!logInPortal ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={logInUser}>
                        <h1 className="login-text"> Sign In</h1>
                        <label>Username</label><br></br>
                        <input
                            value={userNameEntry}
                            type="text"
                            name="username"
                            className="login-box"
                            onChange={(e)=> setUserNameEntry(e.target.value)}
                        /><br></br>
                        <input type="submit" value="LOGIN" className="login-btn"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm