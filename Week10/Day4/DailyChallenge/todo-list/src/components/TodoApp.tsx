import {ReactElement, useState} from "react";
import {Todo} from "./commonInterfacies.ts";
import List from "./commonListComponent.tsx";

const TodoApp = (): ReactElement => {
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: 'do something'},
        {id: 2, text: 'do something else'},
    ])

    const addTodo = () => {
            const id: number = todos.length + 1;
            setTodos([...todos, {
                id,
                text: new Date().toISOString(),
            }]);
        }

    return (
        <div>
            <h2>Tasks: </h2>
            <button onClick={addTodo}>Add some new todo</button>
            <List
                items={todos}
                renderItem={(item) => (
                        <p>{item.text}</p>
                )}
                />
        </div>
    );
}

export default TodoApp;