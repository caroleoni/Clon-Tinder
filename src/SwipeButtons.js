import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__replay'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__close'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <StarIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__favorite'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__flashOn'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons;