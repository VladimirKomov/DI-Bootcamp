import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../redux/actions.js";

const FilterTodo = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handleOnlyCompleted = () => {
        if (filter === 'all') {
            dispatch(setFilter('completed'));
        } else if (filter === 'completed') {
            dispatch(setFilter('uncompleted'));
        } else {
            dispatch(setFilter('all'));
        }
    }

    return (
        <div>
            <button onClick={handleOnlyCompleted}>
                {filter === 'all' && 'Show All Tasks'}
                {filter === 'completed' && 'Show Completed Tasks'}
                {filter === 'uncompleted' && 'Show Uncompleted Tasks'}
            </button>
        </div>
    );
}

export default FilterTodo;