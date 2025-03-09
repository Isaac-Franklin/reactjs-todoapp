import { useEffect, useState } from "react";
import Todo_Input from "./components/Todo_Input";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  // monitor and update local storage
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    const parsedTodos = JSON.parse(localTodos).todos;
    setTodos(Array.isArray(parsedTodos) ? parsedTodos : []);
  }, []);

  function persistTodoData(newTodo: any) {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodo }));
  }

  function handleTodoUpdate(newTodo: any) {
    let allTodos = [...todos, newTodo];
    setTodos(allTodos);
    persistTodoData(allTodos);
  }

  function handleEditTodo(index: any) {
    // Implement todo edit functionality here
    todos.filter((_todo, todoIndex) => {
      if (todoIndex == index) {
        handleDeleteTodo(todoIndex);
        return setCurrentTodo(_todo);
      }
    });
  }

  function handleDeleteTodo(index: any) {
    // Implement todo delete functionality here
    const newTodosList = todos.filter((_todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodosList);
    persistTodoData(newTodosList);
  }

  return (
    <>
      <h1>React ToDo App</h1>
      <Todo_Input
        handleAddTodo={handleTodoUpdate}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        // key = {key}
        todos={todos}
      />
    </>
  );
};

export default App;
