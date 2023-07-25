

const TodoInput = ({ onChange, value }) => {
    return (
        <input className="todo__input"
            placeholder="Add todo"
            value={value} onChange={onChange} type="text">
        </input>

    )
}

export default TodoInput