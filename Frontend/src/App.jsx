import React from "react";
import { Plus, ListFilter } from "lucide-react";
import Todo from "./components/todo";
import EmptyState from "./components/EmptyState";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
    setShowForm(false);
  };

  const deleteTodo = (id) => {
    console.log("ID received:", id);
    console.log("Current todos:", todos);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

 const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo;
    })
  )
}

  return (
    <>
      <div className="py-10 px-20">
        <div>
          <h1 className="text-2xl text-[#0f0f0f]">TO-DO</h1>

          <hr className="mt-4 border-gray-300" />
        </div>

        <div className="mt-7 mb-7 flex gap-4">
          <button
            onClick={() => {
              setShowForm((prev) => !prev);
              console.log(showForm);
            }}
            className="flex cursor-pointer  items-center gap-2 rounded-xl bg-[#3b41d1] px-4 py-2 text-white"
          >
            <Plus size={18} />
            New Task
          </button>

          <button className="flex cursor-pointer items-center gap-2 rounded-xl border-gray-200 border-2 bg-white px-4 py-2 text-[#0f0f0f]">
            <ListFilter size={13} />
            Filter
          </button>
        </div>

        {/* <Todo/> */}
        {todos.length === 0 && !showForm && <EmptyState />}
        {showForm && (
          <TodoForm onAddTodo={addTodo} onClose={() => setShowForm(false)} />
        )}

        <TodoList onDeleteTodo={deleteTodo} todos={todos} />
      </div>
    </>
  );
};

export default App;
