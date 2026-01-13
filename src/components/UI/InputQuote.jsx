import React, { useState } from "react";


const InputQuote = ({title,placeholder,onChange,errors}) => {


    return (
        <div className="location-search">
            <label htmlFor="location-search-input">{title}</label>
            <input  className={'location-search-input'} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)}/>
            {errors && <span className="error">{errors}</span>}
        </div>

    );
};

export default InputQuote;
