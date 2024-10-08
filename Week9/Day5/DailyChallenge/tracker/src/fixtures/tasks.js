import {TASK_STATUS} from "../constants/taskStatus.js";

export const sampleTasks = {
    byId: {
        "1": {
            id: "1",
            title: "Buy groceries",
            description: "Buy milk, eggs, and bread",
            categoryId: "a",
            status: TASK_STATUS.NOT_STARTED,
            dateCreated: "2024-10-01T10:00:00Z"
        },
        "2": {
            id: "2",
            title: "Finish project",
            description: "Complete the Redux project",
            categoryId: "b",
            status: TASK_STATUS.IN_PROGRESS,
            dateCreated: "2024-10-02T11:00:00Z"
        },
        "3": {
            id: "3",
            title: "Read a book",
            description: "Read 'Clean Code'",
            categoryId: "a",
            status: TASK_STATUS.COMPLETED,
            dateCreated: "2024-10-03T12:00:00Z"
        },
        "4": {
            id: "4",
            title: "Exercise",
            description: "Go for a 30-minute run",
            categoryId: "c",
            status: TASK_STATUS.NOT_STARTED,
            dateCreated: "2024-10-04T13:00:00Z"
        }
    },
    allIds: ["1", "2", "3", "4"]
};