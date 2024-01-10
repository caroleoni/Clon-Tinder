import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ChatPreview.css';

const ChatPreview = ({ nombre, mensaje, timestamp, imgPerfil }) => {
  return (
     <Link to={`/chat/${nombre}`}>
        <div className='chatPreview'>
            <Avatar className='chatPreview__image' alt={nombre} src={imgPerfil} />
            <div className='chatPreview__details'>
                <h2>{nombre}</h2>
                <p>{mensaje}</p>
            </div>
            <p className='chatPreview__timestamp'>{timestamp}</p> 
        </div>
     </Link> 
  )
}

export default ChatPreview;