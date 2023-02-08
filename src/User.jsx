import { useContext, useState } from 'react'
import { UserContext } from './contexts/UserContext'

const User = () => {

    const [currentUser, setCurrentUser] = useState(UserContext._currentValue.currentUser)

    return (
        <div>
            <p>Create User Button</p>
            <p>Log in / Log out Button</p>
            <p> User : {currentUser}</p>
        </div>
    )
}

export default User