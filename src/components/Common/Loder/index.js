import React from 'react'
import './styles.css';
import { CircularProgress } from '@mui/material';
//import CircularProgress from '@mui/joy/CircularProgress';

function LoadingComponent() {
    return (
        <div className="loading-flex">
            <CircularProgress/>
        </div>
    )
}

export default LoadingComponent;
