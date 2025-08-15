import { useState } from 'preact/hooks'
import { TodoList } from './components/TodoList'
import { TodoMock } from './mock/TodoMock'
import { AddTodoForm } from './components/AddTodoForm';


export function App() {
  const [useTodoList, setTodoList] = useState(TodoMock);
  const [isFormVisible, setFormVisible] = useState(false);
  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>

      <main className='layout'>
        
        <section className='sidebar'>
          <button onClick={() => setFormVisible(!isFormVisible)}>Añadir tarea</button>
          <button onClick={() => setFormVisible(!isFormVisible)}>Kanban</button>
          <button onClick={() => setFormVisible(!isFormVisible)}>Proyectos</button>
        </section>

        <section className='body'>
          {!isFormVisible && <TodoList todoList={useTodoList}></TodoList>}
          {isFormVisible && <AddTodoForm></AddTodoForm>}
        </section>
      </main>
    </>
  )
}
