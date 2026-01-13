import React from 'react';


const Input =({type,value,setValue,placeholder})=> {

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="appInput">
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
            />
        </div>

    );
}
export default Input
