import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoButton from './components/TodoButton'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [todoInputValue, setTodoInputValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const todoInputHandler = (e) => {
    setTodoInputValue(e.target.value)
  }

  const addButtonClickHandler = () => {
    if (todoInputValue === "") return
    setTodoList([...todoList, todoInputValue])
    setTodoInputValue("")
    toast.success("Task added sucessfully!")
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <header> <h1>GET SHIT DONE</h1></header>
      <section className='card__wrapper'>
        <div className="edinhamzic">
          <TodoInput value={todoInputValue} onChange={todoInputHandler} />
          <TodoButton className="add__button" onClick={addButtonClickHandler}>Add</TodoButton>
        </div>
        <div className="todo__list">
          <TodoList setTodoList={setTodoList} value={todoInputValue} todoList={todoList} />
        </div>
      </section>
    </>
  )
}

export default App
