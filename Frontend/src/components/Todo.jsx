import { Pencil, Trash2 } from "lucide-react";

const Todo = () => {
  return (
    <div className="flex items-start justify-between gap-4 border-2 rounded-xl border-gray-200 py-4">
      
      {/* Left side */}
      <div className="flex min-w-0 items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 border-gray-300 shrink-0"
        />

        <div className="min-w-0">
          <h2 className="truncate font-semibold text-lg text-gray-900">
            Todo title
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Todo description goes here
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

        <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
          <Trash2 size={17} />
        </button>
      </div>

    </div>
  );
}

export default Todo;