import React from 'react';


const Button =({title,color,onClick})=> {
    return (
        <div onClick={onClick ? onClick : null} style={{background:color}} className='app-button'>
            <span>{title}</span>
        </div>

    );
}
export default Button
