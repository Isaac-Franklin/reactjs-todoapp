function TodoCard(props: any) {
  const { todos, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <div className="todoItem">
      {todos}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
