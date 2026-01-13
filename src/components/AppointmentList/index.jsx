import React from 'react';
import { AnimatedList } from 'react-animated-list';
import './style.css'
import Item from './Item';


const AppointmantList =({data})=> {

    return (
        <div className='appointment-list'>
            <AnimatedList animation={"fade"} initialAnimationDuration={1000}>
                {data.map((item,index) => (
                    <Item key={index} item={item} />
                ))}
            </AnimatedList>
        </div>

    );
}
export default AppointmantList
