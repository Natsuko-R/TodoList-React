import React, { useState, useContext } from 'react';
import classes from './addLogs.module.css'
import LogContext from '../../store/log-context';
import Card from "../UI/Card/Card";

const AddLogs = () => {

    const ctx = useContext(LogContext)

    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    // 方法，监听日期变化
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    };
    // 方法，监听内容变化
    const descChangeHandler = (e) => {
        setInputDesc(e.target.value);
    };
    // 方法，监听时长变化
    const timeChangeHandler = (e) => {
        setInputTime(e.target.value);
    };

    // 方法，提交表单
    const formSubmitHandler = (e) => {
        // 取消表单的默认行为
        e.preventDefault();

        // 获取用户输入，并放入一个新对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        };

        // 提交数据
        ctx.addLog(newLog);

        // 数据提交后，清空表单项
        setInputDate('');
        setInputDesc('');
        setInputTime('');
    };

    return (
        <Card className={classes.container}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id="date" type="date" min="2021-01-01" max="2023-12-31" />
                </div>

                <div>
                    <label htmlFor="desc">内容</label>
                    <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text" />
                </div>

                <div>
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id="time" type="number" />
                </div>

                <button className={classes.addBtn}> + </button>
            </form>
        </Card>
    );
};

export default AddLogs;
