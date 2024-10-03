import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSelectedDay} from "../redux/slices/tasksSlice.js";

const DatePicker = () => {
    const selectedDay = useSelector(state => state.tasksState.selectedDay);
    const dispatch = useDispatch();

    const handleDateChange = (e) => {
        const newDay = e.target.value;
        dispatch(setSelectedDay(newDay));
    }

    return (
        <div>
            <h2>Tasks for {selectedDay}</h2>
            <label htmlFor="date-picker">Select a day: </label>
            <input
                id="date-picker"
                type="date"
                value={selectedDay}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DatePicker;
