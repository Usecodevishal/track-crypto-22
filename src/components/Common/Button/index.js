import React from 'react';
import './styles.css';
function Button({text, onClick, outlined}) {
    return (
        <div className={outlined?"outlined-btn-div":"btn-div"}
        onClick={()=>onClick()}
        >{text}</div>
    )
}

export default Button;
