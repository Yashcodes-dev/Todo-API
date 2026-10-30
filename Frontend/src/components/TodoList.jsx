import React from "react";
import Todo from "./Todo.jsx";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo, setShowForm, onUpdateTodoForm, onHandleUpdateTodoForm }) => {
  return (

    <div className="space-y-8">

      {todos.map((todo) => (
        <Todo 
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
        setShowForm={setShowForm}
        onUpdateTodoForm={onUpdateTodoForm}
        onHandleUpdateTodoForm={onHandleUpdateTodoForm}
        key={todo._id} 
        todo={todo} />
      ))}

    </div>

  )
}

export default TodoList;
