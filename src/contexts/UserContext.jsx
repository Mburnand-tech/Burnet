import { createContext , useState} from 'react'

export const UserContext = createContext()

export const UserLoggedIn = ({children}) => {
    const [currentUser, setCurrentUser] = useState("grumpy19")


    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}