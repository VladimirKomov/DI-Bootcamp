import React, {useContext} from 'react';
import {TodoContext} from "./TodoContext.jsx";

const FilterTodo = () => {
    const { filter, setFilter } = useContext(TodoContext);

    const handleOnlyCompleted = () => {
        if (filter === 'all') {
            setFilter('completed');
        } else if (filter === 'completed') {
            setFilter('uncompleted');
        } else {
            setFilter('all');
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