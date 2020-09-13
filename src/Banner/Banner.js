import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from '../Search/Search';
import { useHistory } from 'react-router-dom';

function Banner(){
    const history = useHistory();
    const [showSearch, setShowSearch] = useState
    (false);

    return (
        <div className = 'banner'>
            <div className="banner_search">
                {showSearch && <Search />}

                <Button onClick = {() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
                    {showSearch ? "Hide" : "Sort by dates"}
                </Button>
            </div>

            <div className='banner_info'>
                <h1>The Best Way to Hire Software Support</h1>
                <Button onClick={() => history.push('/search')} variant='outlined'>Start searching</Button>
            </div>
        </div>
    )
}

export default Banner