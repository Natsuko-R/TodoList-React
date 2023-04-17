import React from 'react';
import ReactDOM from "react-dom";
import classes from './Mask.module.css';

// 获取遮罩层的根元素
const maskRoot = document.getElementById('mask-root');

const Mask = (props) => {
    return ReactDOM.createPortal(
        <div {...props} className={`${classes.mask} ${props.className}`}>
            {props.children}
        </div>
        , maskRoot);
};

export default Mask;
