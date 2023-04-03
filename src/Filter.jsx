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
        <FormControl className={'App filterBar'} >
            <FormLabel>Filter Results</FormLabel>
            <RadioGroup defaultValue='date'><label>Sort By</label>
                <FormControlLabel value="date" onChange={setSortBy} control={<Radio />} label='Date'/>
                <FormControlLabel value="author" onChange={setSortBy} control={<Radio />} label='Author'/>
                <FormControlLabel value="title" onChange={setSortBy} control={<Radio />} label='Title'/>
                <FormControlLabel value="votes" onChange={setSortBy} control={<Radio />} label='Votes'/>
                <FormControlLabel value="comment_count" onChange={setSortBy} control={<Radio />} label='Amount of Comments'/>
            </RadioGroup>
            <label>Order By</label>
            <div></div>
            <span className="ToggleLightMode--inline-text">Desc</span>
                <Switch
                 onChange={setOrderBy}
                 size="large"
                 inputProps={{ 'aria-label': 'controlled' }}
               />
               <span className="ToggleLightMode--inline-text">Asc</span>
        </FormControl>
    )
}

export default Filter