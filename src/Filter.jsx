import {  Switch, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useContext} from 'react'
import { useSearchParams } from 'react-router-dom' 
import { ThemeContext } from './contexts/themeContext'

import './App.css';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams({})
    const { currentTheme }  = useContext(ThemeContext)


    const setSortBy = (e) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('sortby', e.target.value)
        setSearchParams(newParams)
        
    }
    const setOrderBy = (e) => {
        const newParams = new URLSearchParams(searchParams)
        let searchOrder = e.target.checked ? 'asc' : 'desc'
        newParams.set('orderby', searchOrder)
        setSearchParams(newParams)
    
    }

//className='checkbox-dropdown'
 return (
    <div className={currentTheme === 'light' ? `App filterBarLight` : `App filterBarDark` }>
        <FormControl>
            {/* <FormLabel className={' App filterBarButtons'}>Fi</FormLabel> */}
            <RadioGroup className={' App filterBarTitles'} defaultValue='date'><label>Sort By:</label>
                <FormControlLabel className={' App filterBarButtons'} value="date" onChange={setSortBy} control={<Radio />} label='Date'/>
                <FormControlLabel className={' App filterBarButtons'} value="author" onChange={setSortBy} control={<Radio />} label='Author'/>
                <FormControlLabel  className={' App filterBarButtons'}value="title" onChange={setSortBy} control={<Radio />} label='Title'/>
                <FormControlLabel className={' App filterBarButtons'} value="votes" onChange={setSortBy} control={<Radio />} label='Votes'/>
                <FormControlLabel className={' App filterBarButtons'} value="comment_count" onChange={setSortBy} control={<Radio />} label='Comments'/>
            </RadioGroup>
            <label className={' App filterBarTitles'}>Order By:</label>
            <div></div>
            <span className={' App filterBarButtons'}>Desc</span>
                <Switch
                 className='App AscDescButton'
                 onChange={setOrderBy}
                 size="small"
                 inputProps={{ 'aria-label': 'controlled' }}
               />
               <span className={' App filterBarButtons'}>Asc</span>
        </FormControl>
    </div>
    )
}

export default Filter