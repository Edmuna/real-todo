

const EditInput = ({ onChange, defaultValue, onClick }) => {
    return (
        <>
            <input className="edit__input"
                placeholder="Add todo"
                onChange={onChange} type="text"
                defaultValue={defaultValue}>
            </input>

        </>

    )
}

export default EditInput