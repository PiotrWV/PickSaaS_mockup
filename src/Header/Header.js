import React from 'react';
import style from './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className = 'header'>
            <Link to='/'>
                <img className="header_icon" src="https://www.kindpng.com/picc/m/393-3937712_picksaas-com-design-saas-logo-hd-png-download.png" alt="pickSaaS_logo"/>
            </Link>
            <div className="header_center">
                <input type="text" placeholder="Find software support that you need"/>
                <SearchIcon />
            </div>

            <div className="header_right">
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header