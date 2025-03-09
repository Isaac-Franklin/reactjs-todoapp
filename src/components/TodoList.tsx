import TodoCard from "./TodoCard";

const TodoList = (props: any) => {
  const { todos, handleDeleteTodo, handleEditTodo } = props;
  return (
    <div className="main">
      {todos.map((todo: String, index: any) => {
        return (
          <TodoCard
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            index={index}
            todos={todo}
          ></TodoCard>
        );
      })}
    </div>
  );
};

export default TodoList;
