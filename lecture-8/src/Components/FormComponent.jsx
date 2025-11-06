export default function FormComponent({ todo = { title: "placeholder" }, handleOnChange, handleAddTodo }) {
    return (
        <div>
            <form action="">
                <input type="text" name="title" value={todo.title} onChange={handleOnChange} />
                <button onClick={handleAddTodo}>Add task to list</button>
            </form>
        </div>
    );
}
