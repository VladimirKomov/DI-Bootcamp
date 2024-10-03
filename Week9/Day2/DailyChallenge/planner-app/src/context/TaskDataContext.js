import React, {createContext, useState} from "react";

export const TaskDataContext = createContext();

export const TaskDataProvider = ({ children }) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDay, setSelectedDay] = useState(today);

    return (
        <TaskDataContext.Provider value={{selectedDay, setSelectedDay}}>
            {children}
        </TaskDataContext.Provider>
    );
}