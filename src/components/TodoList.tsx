import { TodoType } from "../types";
import { Todo } from "./Todo";

export const TodoList = ({todoList}:{todoList:TodoType[]}) => {

    return(
        <>
        {todoList?.map((todoElement) => {
            return <Todo todo={todoElement} key={todoElement.id}></Todo>
        })}
        </>
    )

}