import React from 'react';
import './styles.css';
function Button({text, outlined, onClick}) {
    return (
        <div className={outlined?"outlined-btn-div":"btn-div"}
        
        >{text}</div>
    )
}

export default Button;
