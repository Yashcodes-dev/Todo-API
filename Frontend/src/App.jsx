import React from "react";
import { Plus, ListFilter } from "lucide-react";
import Todo from "./components/Todo";
import EmptyState from "./components/EmptyState";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UpdateTodoForm from "./components/UpdateTodoForm";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [updateShowForm, setupdateShowForm] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const [todos, setTodos] = useState([]);

  const filteredTodos = todos.filter((todo) => {
    if (selectedFilter === "Pending") {
      return todo.completed === false;
    }

    if (selectedFilter === "Completed") {
      return todo.completed === true;
    }

    if (selectedFilter === "All") {
      return true;
    }
  });

  const addTodo = async (todo) => {
    const addedTodo = await axios.post(
      "http://localhost:8000/api/v1/todos",
      todo,
    );
    setTodos((prev) => [...prev, addedTodo.data.data]);
    setShowForm(false);
  };

  const deleteTodo = async (id) => {
    const deletedTodo = await axios.delete(
      `http://localhost:8000/api/v1/todos/${id}`,
    );

    //     console.log("ID received:", id);

    // console.log("Current todos:", todos);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  const toggleTodo = async (_id) => {
    const currentTodo = todos.find((todo) => todo._id === _id);
    const newCompleteStatus = !currentTodo.completed;

    const toggledTodo = await axios.patch(
      `http://localhost:8000/api/v1/todos/${_id}`,
      { completed: newCompleteStatus },
    );

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo._id == _id) {
          return {
            ...todo,
            completed: newCompleteStatus,
          };
        }

        return todo;
      });
    });
  };

  const handleUpdateTodoForm = (todo) => {
    setSelectedTodo(todo);
    setupdateShowForm(true);
  };

  //Get todos
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/todos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="py-10 px-20">
        <div>
          <h1 className="text-2xl text-[#0f0f0f]"> TO-DO </h1>

          <hr className="mt-4 border-gray-300" />
        </div>

        <div className="mt-7 mb-7 flex gap-4">
          <button
            onClick={() => {
              setShowForm((prev) => !prev);
              // console.log(showForm);
            }}
            className="flex cursor-pointer  items-center gap-2 rounded-xl bg-[#3b41d1] hover:text-[#3b41d1] hover:bg-white hover:border-[#3b41d1]  transition duration-200 ease-in-out active:scale-95 px-4 h-9 py-1 text-white"
          >
            <Plus size={18} />
            New Task
          </button>

          <div className="relative">
            <button
              onClick={() => setShowFilter((prev) => !prev)}
              className="flex gap-3 cursor-pointer  items-center rounded-xl border-gray-200 border-2 bg-white px-4 h-9 p-1 text-[#0f0f0f] hover:scale-96 transition duration-200 ease-in-out"
            >
              <ListFilter size={13} />
              Filter
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedFilter === "All"
                    ? "bg-red-500"
                    : selectedFilter === "Pending"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
              ></span>
            </button>

            {showFilter && (
              <div className="absolute top-full right-0 mt-2 z-50 w-36 rounded-lg border border-gray-200 bg-white p-2 shadow-lg flex flex-col gap-2">
                <button
                  onClick={() => {
                    setSelectedFilter("All");
                    setShowFilter(false);
                  }}
                  className="px-2  block  rounded-lg w-full text-start border-gray-300 py-2 cursor-pointer hover:opacity-95 hover:bg-gray-200
                transition duration-200 ease-in-out flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-[#E0443E] border border-[#E0443E] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] shrink-0"></span>
                  All
                </button>
                <hr className=" border-gray-300" />
                <button
                  onClick={() => {
                    setSelectedFilter("Pending");
                    setShowFilter(false);
                  }}
                  className="px-2  block  rounded-lg w-full text-start border-gray-300 py-2 cursor-pointer hover:opacity-95 hover:bg-gray-200
                transition duration-200 ease-in-out flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] shrink-0"></span>
                  Pending
                </button>
                <hr className=" border-gray-300" />
                <button
                  onClick={() => {
                    setSelectedFilter("Completed");
                    setShowFilter(false);
                  }}
                  className="px-2  block  rounded-lg w-full text-start border-gray-300 py-2 cursor-pointer hover:opacity-95 hover:bg-gray-200
                transition duration-200 ease-in-out flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAA2C] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] shrink-0"></span>
                  Completed
                </button>
              </div>
            )}
          </div>
        </div>

        {/* <Todo/> */}
        {todos.length === 0 && !showForm && <EmptyState />}

        {showForm && (
          <TodoForm onAddTodo={addTodo} onClose={() => setShowForm(false)} />
        )}

        {updateShowForm && (
          <UpdateTodoForm
            todo={selectedTodo}
            onCloseForm={() => setupdateShowForm(false)}
          />
        )}

        <TodoList
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          setShowForm={setShowForm}
          todos={todos}
          onUpdateTodoForm={setupdateShowForm}
          onHandleUpdateTodoForm={handleUpdateTodoForm}
        />
      </div>
    </>
  );
};

export default App;
