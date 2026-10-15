import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (

    <div className="space-y-8">
      {todos.map((todo) => (
        <Todo 
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
        key={todo.id} 
        todo={todo} />
      ))}
    </div>

  )
}

export default TodoList;
