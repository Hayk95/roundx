import React, { useState } from "react";


const Select = ({title,data}) => {


    return (
                <div className="location-search">
                    <label htmlFor="location-search-input">{title}</label>
                    <select  className={'location-search-input'}>
                        <option>Select</option>
                        {data.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>

                </div>

    );
};

export default Select;
