import { TodoState, TodoType } from "../types.d";

export const Todo = ({todo}: {todo:TodoType}) => {
    console.log(todo.dueDate)

    const description = todo?.description;
    const dueDate = todo.dueDate ? ` | 🗓️ ${todo.dueDate?.toLocaleDateString()}`: '';
    const tagsText = todo.tags?.map(tag => {
        return `#${tag} `
    })
    const tags = todo.tags && todo.tags.length > 0 ? ` | 🏷️ ${tagsText.toString()}`: '';

    return (
        <div className='todo'>
            <input 
                checked = {todo.todoState === TodoState.Completed} 
                type={"checkbox"} 
                id={todo.id}></input>
            <label htmlFor={todo.id}>{`${description} ${dueDate} ${tags}`}</label>
        </div>)

}