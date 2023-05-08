import { useContext , useState} from 'react'
import { UserContext } from './contexts/UserContext'
import { Avatar, Tooltip, Button } from '@mui/material'

import './App.css';

const LoggedInSwitch = ({isLoggedIn, setIsLoggedIn,  setLogInPortal}) => {
    
    const  {currentUser}  = useContext(UserContext)
    const [showSignIn, setShowSignIn] = useState(true)
    

    const handleSignOut = () => {
        console.log("Lets sign you out")
        setIsLoggedIn(false)
        setShowSignIn(true)
    }

    const handleLogin = () => {
        console.log("We are going to log you in")
        setShowSignIn(false)
        setLogInPortal(true)
    }
    if (isLoggedIn=== true){
        return (
            <div className={'App signedInElements'}>
                <button onClick={handleSignOut} className={'App logOut'} >Log out</button>
                <Tooltip title={currentUser[0].name }>
                    <Avatar src={currentUser[0].avatar_url} alt='profile'  sx={{ width: 44, height: 44 }} variant="circular" className={'App loggedInAvatar'}/>
                </Tooltip>
                {/* <button onClick={handleSignOut} className={'App logOut'} >Log out</button> */}
                {/* <h5>{currentUser[0].name}</h5>
                <p> User : {currentUser[0].username}</p> */}
            </div>
        )
    }
    if (isLoggedIn === false){
        return (
            <div>
                { showSignIn === true ?
                <Button variant="contained" className={"App signIn"}onClick={handleLogin} >Sign in</Button> : null
        }
            </div>
        )
    }
}

export default LoggedInSwitch