import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchReslut from "../SearchResult/SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <h1>Opportunities that waits for you</h1>
                <Button variant="outlined">Budget</Button>
                <Button variant="outlined">Keyword</Button>            
                <Button variant="outlined">Software</Button>
                <Button variant="outlined">Skills</Button>
                <Button variant="outlined">Reset all</Button>
                <p>54 resluts</p>

            </div>
            <SearchReslut 
                img="https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                location="Warsaw | Poland"
                name="Sebastian"
                title="API Integration Expert"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                budget="$600"

            />
            <SearchReslut 
                img="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                location="Wrocław | Poland"
                name="Marek"
                title="WordPress developer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                budget="$500"

            />

            <SearchReslut 
                img="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                location="Barcelona | Spain"
                name="Rafael"
                title="Shopify Rails App Expert"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
                budget="$300"

            />

            <SearchReslut 
                img="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                location="Londyn | England"
                name="Zoe"
                title="Zoho Expert, Zoho One A-Z Consulting"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                budget="$200"

            />
        </div>
    )
}

export default SearchPage