import React from 'react';
import './styles.css';
function Button({text, outlined}) {
    return (
        <div className={outlined?"outlined-btn-div":"btn-div"}>{text}</div>
    )
}

export default Button;
