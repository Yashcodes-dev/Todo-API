import { Pencil, Trash2 } from "lucide-react";

const Todo = ({todo, onDeleteTodo}) => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl py-4 pl-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      
      {/* Left side */}
      <div className="flex min-w-0 items-start gap-3 ">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 border-gray-300 shrink-0"
        />

        <div className="min-w-0">
          <h2 className="truncate font-semibold text-lg text-gray-900">
            {todo.title}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {todo.description}
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Created: 03 Oct 2026 · Updated: 03 Oct 2026
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex shrink-0 items-center gap-2">
        <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
          <Pencil size={17} />
        </button>

        <button
        onClick={()=>onDeleteTodo(todo.id)}
         className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
          <Trash2 size={17} />
        </button>
      </div>

    </div>
  );
}

export default Todo;