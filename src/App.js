import { useState } from "react";
import LogContext from './store/log-context';
import Logs from "./components/Logs/Logs";
import AddLogs from "./components/addLogs/addLogs";

// 模拟一组日志数据
const LOGS_DATA = [
    {
        id: '001',
        date: new Date(2021, 1, 20, 18, 30),
        desc: '代办事项1',
        time: 30
    },
    {
        id: '002',
        date: new Date(2022, 2, 10, 12, 30),
        desc: '代办事项2',
        time: 20
    },
    {
        id: '003',
        date: new Date(2022, 2, 11, 11, 30),
        desc: '代办事项3',
        time: 40
    },
    {
        id: '004',
        date: new Date(2023, 2, 15, 10, 30),
        desc: '代办事项4',
        time: 80
    },
    {
        id: '005',
        date: new Date(2023, 1, 27, 10, 30),
        desc: '代办事项5',
        time: 10
    }
]

const App = () => {

    const [logsData, setLogsData] = useState(LOGS_DATA);

    // 方法，根据id删除一条日志
    const deleteLogById = (id) => {
        // P48节欣赏index带来的bug
        // setLogsData(prevState => {
        //     const newLog = [...prevState];
        //     newLog.splice(index, 1);
        //     return newLog;
        // });
        setLogsData(prevState => {
            return [...prevState].filter(item => item.id !== id);
        });
    };
    // 方法，添加一条新日志
    const addLog = (newLog) => {
        // 向新的日志中添加id
        newLog.id = Date.now() + '';

        // 将新的数据添加到数组中
        // logsData.push(newLog);
        setLogsData([newLog, ...logsData]);

    };

    return (
        <LogContext.Provider value={{ deleteLogById, addLog }}>
            <br />
            <AddLogs />
            <br />
            <Logs logsData={logsData} />
        </LogContext.Provider>
    )
};

export default App;
