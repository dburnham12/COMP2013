import TodoCard from "./TodoCard";

export default function TodoCardContainer({ todoList, handleOnCheck, handleOnDelete }) {
    return (
        <div>
            {todoList.map((item, index) => (
                <TodoCard
                    {...item}
                    handleOnCheck={handleOnCheck}
                    handleOnDelete={handleOnDelete}
                    key={index}
                    index={index}
                />
            ))}
        </div>
    );
}
