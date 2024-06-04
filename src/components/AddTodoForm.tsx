import { useState } from "preact/hooks"
import { TodoType } from "../types"

export const AddTodoForm = () => {

    const [todoElement, setTodoElement] = useState<TodoType>()
    return(
        <form className='form-todo'>
            <label htmlFor="description"> Descripción </label>
            <input 
                type='text' 
                value={todoElement?.description} 
                id='description'
                name='description'/>

            <label htmlFor="dueDate"> Fecha de vencimiento </label>
            <input 
                type='date' 
                value={todoElement?.dueDate?.toDateString()} 
                id='dueDate'
                name='dueDate'/>

            <label htmlFor="priority"> Prioridad </label>
            <input 
                type='number' 
                value={todoElement?.priority? todoElement?.priority : 0} 
                id='priority'
                name='priority'/>

            <button>Añadir tarea</button>
        </form>
    )
}