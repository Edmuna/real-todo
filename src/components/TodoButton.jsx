
const TodoButton = ({ children, onClick }) => {
    return (
        <button className='todo__button' onClick={onClick}>{children}</button>
    )
}

export default TodoButton