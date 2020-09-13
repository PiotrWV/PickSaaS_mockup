import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


function Search(){
    const history = useHistory();
    const [startDate, setStarDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    function handleSelect (range) {
        setStarDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }
    

    return(
        <div className='searchDates'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <Button onClick={() => history.push('/search')}>Search</Button>
        </div>
    )
}

export default Search