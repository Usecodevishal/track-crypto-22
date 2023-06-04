import React from 'react';
import './styles.css';
function Button({text, outlined}) {
    return (
        <p className={outlined?"outlined-btn":"btn"}>{text}</p>
    )
}

export default Button;
