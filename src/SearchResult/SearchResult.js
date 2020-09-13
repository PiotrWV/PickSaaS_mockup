import React from 'react';
import './SearchResult.css';
import { Button } from "@material-ui/core";


function SearchReslut({img, location, title, description, budget, name}) {
    return(
        <div className='searchResult'>
            <img src={img} alt="" /> 

            <div className="searchResult_info">
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h4>{name}</h4>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="searchResult_infoBottom">

                </div>
                <div className="searchResult_budget">
                    <p>Budget:</p>
                    <h2>{budget}</h2>
                </div>
            </div>          
        </div>
    )
}

export default SearchReslut