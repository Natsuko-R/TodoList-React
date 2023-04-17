import { useState } from "react";
import classes from './Logs.module.css'
import LogItem from "./LogItem/LogItem";
import LogFilter from "./LogFilter/LogFilter";
import Card from "../UI/Card/Card";

const Logs = (props) => {

    // 创建一个存储年份的state
    const [year, setYear] = useState(1);

    // 过滤数据，只显示某一年的数据
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);

    // 方法，修改年份
    const changeYearHandler = (year) => {
        setYear(year);
    };
    // 方法，遍历条目
    const mapLogs = (data) => {
        return data.map(item =>
            <LogItem
                key={item.id}
                log={item}
            />
        )
    };

    // logs为空时显示的提示（用一种很不优雅的方式...
    const noLogs = (<p className="no-logs"> 没找到日志！</p>)

    return (
        <Card className={classes.logs}>
            <LogFilter
                year={year}
                onYearChange={changeYearHandler}
            />

            {
                year === 1
                    ? (mapLogs(props.logsData).length === 0 ? noLogs : mapLogs(props.logsData))
                    : (mapLogs(filterData).length === 0 ? noLogs : mapLogs(filterData))
            }
        </Card>
    )
};

export default Logs;
