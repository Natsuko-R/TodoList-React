import React from 'react';

const LogFilter = (props) => {

    const changeHandler = e => {
        props.onYearChange(+e.target.value);
    };

    return (
        <div>
            请选择年份：
            <select
                onChange={changeHandler}
                value={props.year}
            // defaultValue={"2022"}
            >
                <option value="1">全部</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    );
};

export default LogFilter;
