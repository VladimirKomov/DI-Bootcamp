import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksByDay : {},
    selectedDay : new Date().toISOString().split('T')[0],
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,

    //actions
    reducers: {
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload;
        },
        //add task
        addTask: {
            reducer: (state, action) => {
                const { day, taskWithData } = action.payload;
                //for the first task - an empty array
                state.tasksByDay[day] = state.tasksByDay[day] || [];
                //add task
                state.tasksByDay[day].push(taskWithData);
                console.log('Added new task:', state.tasksByDay[day]);
            },
            prepare: (day, text) => {
                const taskWithData = {
                    id: nanoid(),
                    text,
                    createdAt: new Date().toISOString(),
                    completed: false
                };
                // return object sliceTool
                return { payload: { day, taskWithData } };
            }
        },

        editTask: (state, action) => {
            const { day, id, newText } = action.payload;
            const task = state.tasksByDay[day].find(task => task.id === id);
            if (task) {
                task.text = newText;
            }
        },

        toggleTaskCompletion: (state, action) => {
            const { day, id } = action.payload;
            const task = state.tasksByDay[day].find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
            }
        },

        deleteTask: (state, action) => {
            const { day, id } = action.payload;
            state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== id);
        }

    }
})

export const {
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    setSelectedDay } = tasksSlice.actions;
export default tasksSlice.reducer;
