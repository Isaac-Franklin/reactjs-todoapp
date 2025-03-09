const Todo_Input = (props: any) => {
  const { handleAddTodo, currentTodo, setCurrentTodo } = props;
  return (
    <header>
      <input
        value={currentTodo}
        onChange={(e) => {
          // if (handleEditTodo) setCurrentTodo(handleEditTodo(todo));
          setCurrentTodo(e.target.value);
        }}
        placeholder="Enter todo here..."
      />
      <button
        onClick={() => {
          handleAddTodo(currentTodo);
          setCurrentTodo("");
        }}
      >
        Add Todo
      </button>
    </header>
  );
};

export default Todo_Input;
