import { TodoState, TodoType } from "../types.d";

export const TodoMock : TodoType[] = [
    {
        id: "0",
        title: "Tarea de prueba 0",
        description: "Test tarea 0",
        createDate: new Date(),
        dueDate: null,
        todoState: TodoState.Received,
        priority: 1,
        completeDate: null,
        tags: ["test"]
    },
    {
        id: "1",
        title: "Tarea de prueba 1",
        description: "Test tarea 1",
        createDate: new Date(),
        dueDate: new Date(),
        todoState: TodoState.Completed,
        priority: 2,
        completeDate: new Date(),
        tags: ["test"]
    }
]