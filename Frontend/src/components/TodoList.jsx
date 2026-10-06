import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (

    <div className="space-y-8">
      {todos.map((todo) => (
        <Todo 
        onDeleteTodo={onDeleteTodo}
        key={todo.id} 
        todo={todo} />
      ))}
    </div>

  )
}

export default TodoList;
