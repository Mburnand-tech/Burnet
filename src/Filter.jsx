import {  Switch, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

import { useSearchParams } from 'react-router-dom' 

import './App.css';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams({})

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
    <div className={'App filterBar'}>
        <FormControl>
            {/* <FormLabel className={' App filterBarButtons'}>Fi</FormLabel> */}
            <RadioGroup className={' App filterBarButtons'} defaultValue='date'><label>Sort By:</label>
                <FormControlLabel className={' App filterBarButtons'} value="date" onChange={setSortBy} control={<Radio />} label='Date'/>
                <FormControlLabel className={' App filterBarButtons'} value="author" onChange={setSortBy} control={<Radio />} label='Author'/>
                <FormControlLabel  className={' App filterBarButtons'}value="title" onChange={setSortBy} control={<Radio />} label='Title'/>
                <FormControlLabel className={' App filterBarButtons'} value="votes" onChange={setSortBy} control={<Radio />} label='Votes'/>
                <FormControlLabel className={' App filterBarButtons'} value="comment_count" onChange={setSortBy} control={<Radio />} label='Comments'/>
            </RadioGroup>
            <label className={' App filterBarButtons'}>Order By:</label>
            <div></div>
            <span className={' App filterBarButtons'}>Desc</span>
                <Switch
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