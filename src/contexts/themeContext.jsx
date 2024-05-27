import { createContext , useState} from 'react'

export const ThemeContext = createContext()

export const Theme = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
