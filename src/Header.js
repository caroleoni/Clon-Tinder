import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({backButton}) => {
    const navigate = useNavigate();
  return (
    <div className='header'>
        {
            backButton ? (
                <IconButton onClick={() => navigate(backButton, {replace: true})}>
                    <ArrowBackIosIcon fontSize='large' className='header__backButton' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large' />
                </IconButton>
            )
        }
        
        <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
            className='header__logo' 
            alt="logo"
        />
        </Link>
        <Link to="/chats">
            <IconButton>
                <ForumIcon className='header__icon' fontSize='large' />
            </IconButton>
        </Link>
        
    </div>
  )
}

export default Header;