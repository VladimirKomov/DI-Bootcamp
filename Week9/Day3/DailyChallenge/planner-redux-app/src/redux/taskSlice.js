import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    tasksByDay: {},
    selectedDay: new Date().toISOString().split('T')[0],
}

const taskSlice = createSlice({
    name: 'sliceTasks',
    initialState,
    reducers: {
        setSelectedDay: (state, action) => {
            const day = action.payload;
            state.selectedDay = day;
        },
        addTask: {
            reducer(state, action) {
                const {day, task} = action.payload;
                state.tasksByDay[day] = [...(state.tasksByDay[day] || []), task];
            },
            prepare: (day, text, dueTime) => {
                const newTask = {
                    id: nanoid(),
                    text,
                    completed: false,
                    dueTime,
                    createdAt: new Date().toISOString()
                }
                return {
                    payload: {
                        day,
                        task: newTask
                    }
                };
            }
        },
        deleteTask(state, action) {
            const {day, id} = action.payload;
            state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== id);
        },
        toggleTask: (state, action) => {
            const { day, id } = action.payload;
            const task = state.tasksByDay[day].find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask(state, action) {
            // Add logic to update a task
        },
    },
})

export const {
    setSelectedDay,
    addTask,
    deleteTask,
    toggleTask,
    editTask
} = taskSlice.actions;

export default taskSlice.reducer;