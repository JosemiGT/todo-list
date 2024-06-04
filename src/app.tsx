import { useState } from 'preact/hooks'
import './app.css'
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
      {!isFormVisible && <TodoList todoList={useTodoList}></TodoList>}
      {isFormVisible && <AddTodoForm></AddTodoForm>}
      <footer>
        <button onClick={() => setFormVisible(!isFormVisible)}>Añadir</button>
      </footer>
    </>
  )
}
