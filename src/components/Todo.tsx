import { TodoState, TodoType } from "../types.d";
import { TagsList } from "./TagsList";

export const Todo = ({todo}: {todo:TodoType}) => {
    console.log(todo.dueDate)

    const description = todo?.description;
    const dueDate = todo.dueDate ? `🗓️ ${todo.dueDate?.toLocaleDateString()}`: '';
    const tagsText = todo.tags?.map(tag => {
        return `${tag} `
    })
    const tags = todo.tags && todo.tags.length > 0 ? ` 🏷️ ${tagsText.toString()}`: '';

    return (
        <section className='todo'>

            <header>
                <h2 className='todo-title'>{todo.title}</h2>
            </header>

            <p className='todo-state'>{`Estado: ${todo.todoState.toString()}`}</p>
            <p className='todo-description'>{description}</p>
            <p className='todo-priority'>{`${todo.priority}`}</p>
            <p className='todo-date'>{`${dueDate}`}</p>

            <footer>
                <TagsList tags={todo.tags} />
            </footer>

        </section>)

}