import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    /*
    *   props.children 表示组件的标签体
    * */
    // console.log(props.children);

    return (
        <div {...props} className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
};

export default Card;
