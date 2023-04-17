import React from "react";

const LogContext = React.createContext({
    deleteLogById: () => { },
    addLog: () => { }
})

export default LogContext