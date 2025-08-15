export type TodoType = {
    id: string,
    title: string,
    description: string,
    priority: number,
    createDate: Date,
    dueDate: Date | null,
    completeDate: Date | null,
    todoState: TodoState,
    tags: string[]
}

export enum TodoState {
    Received = 0,
    Scheduled = 1,
    InProgress = 2,
    OnHold = 3,
    Completed = 4
}