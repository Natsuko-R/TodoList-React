import React, { useContext, useState } from 'react';
import classes from './LogItem.module.css';
import LogContext from '../../../store/log-context';
import Card from "../../UI/Card/Card";
import Confirm from '../../UI/Confirm/Confirm';

const LogItem = (props) => {

    const ctx = useContext(LogContext)

    // console.log(props.log.date.getDate());
    const date = props.log.date.toLocaleString('zh-CN', { weekday: "long", month: "long", year: "numeric", day: "numeric" })

    // 创建state，是否显示Confirm窗口
    const [showConfirm, setShowConfirm] = useState(false);

    // 方法，显示Confirm窗口
    const isShowConfirm = () => {
        setShowConfirm(true)
    }
    // 方法，退出Confirm窗口
    const notShowConfirm = () => {
        setShowConfirm(false)
    }
    // 方法，删除一条日志
    const delHandler = () => {
        ctx.deleteLogById(props.log.id)
        setShowConfirm(false)
    }

    return (
        <Card className={classes.cardWrap}>

            {showConfirm &&
                <Confirm
                    confirmText={'确定删除吗？'}
                    onConfirm={delHandler}
                    onCancel={notShowConfirm}
                />
            }

            <div>{date}</div>
            <div>{props.log.desc}</div>
            <div>{props.log.time}分钟</div>

            <div
                className={classes.deleteBtn}
                onClick={isShowConfirm}
            >
                -
            </div>
        </Card>
    );
};

export default LogItem;
