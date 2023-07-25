import { useState } from "react"
import EditInput from "./EditInput";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({ todoList, onClick, setTodoList }) => {

    // ------------------------ S T A T E S -----------------------------------------

    const [editButtonClicked, setEditButtonClicked] = useState(false)
    const [editedTodo, setEditedTodo] = useState("")
    const [editInputValue, setEditInputValue] = useState("")


    // --------------------- F U N C T I O N S ------------------------------------------

    const editButtonClickHandler = (todoItem) => {
        setEditButtonClicked(true)
        setEditedTodo(todoItem)
    }

    const cancelButtonClickHandler = () => {
        setEditButtonClicked(false)
        setEditedTodo("")
    }

    const deleteButtonClickHandler = (index) => {
        const updatedList = [...todoList];
        updatedList.splice(index, 1);
        setTodoList(updatedList);
        toast.error("Task erased sucessfully!")
    };

    const editInputValueHandler = (e) => {
        setEditInputValue(e.target.value)
    }

    const saveButtonClickHandler = () => {
        if (editInputValue === "") return
        const updatedList = [...todoList];
        const editedIndex = updatedList.findIndex((todo) => todo === editedTodo);
        toast.info("Task updated sucessfully")

        if (editedIndex !== -1) {
            updatedList[editedIndex] = editInputValue;
            setTodoList(updatedList);
            setEditButtonClicked(false);
            setEditedTodo("");
        }
    };
    // --------------------------------------------------------------------------------

    return (
        <ul className="todo__list">
            {todoList.map((todoItem, index) => (
                <li key={index}>
                    {editButtonClicked && editedTodo === todoItem ? (
                        <div className="edit__input__and__button">
                            <div className="edit__input">
                                <EditInput onChange={editInputValueHandler} defaultValue={todoItem} />
                            </div>
                            <div className="edit__buttons">
                                <div className="save__cancel__button" onClick={saveButtonClickHandler} ><i className="fa-solid fa-check fa-xl"></i></div>
                                <div onClick={cancelButtonClickHandler}><i className="fa-solid fa-xmark fa-xl"></i></div>
                            </div>
                        </div>
                    ) : (
                        <div className="todo__item__and__buttons">
                            <div className="todo__item">{todoItem}</div>
                            <div className="todo__item__buttons">
                                <div className="edit__button" onClick={() => editButtonClickHandler(todoItem)}><i class="fa-solid fa-pen-to-square fa-lg"></i></div>
                                <div className="delete__button" onClick={() => deleteButtonClickHandler(index)}><i class="fa-solid fa-trash fa-lg"></i></div>
                            </div>
                        </div>
                    )}
                </li>
            )).reverse()}
        </ul>
    )
}

export default TodoList
