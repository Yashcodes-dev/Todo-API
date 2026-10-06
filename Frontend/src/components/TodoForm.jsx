import React from 'react'
import { useState } from 'react';

const TodoForm = ({onClose, onAddTodo }) => {

     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");


    return (

         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
      
<div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 sm:p-6">        
   <h2 className="text-xl font-semibold text-[#0f0f0f]">
        Create New Task
      </h2>

      <div className="mt-5">
        <label className="text-sm font-medium text-[#0f0f0f]">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          placeholder="What do you want to accomplish?"
          className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#3b41d1]"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium text-[#0f0f0f]">
          Description
        </label>

        <textarea
          placeholder="Add some details..."
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          rows="4"
          className="mt-2 w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#3b41d1]"
        />
      </div>

      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button 
        onClick={onClose}
        className="rounded-md border border-gray-300 px-4 py-2 text-[#0f0f0f] cursor-pointer">
          Cancel
        </button>

        <button 
        onClick={() => onAddTodo({ id: Date.now(),title, description , completed: false})}
        className="rounded-md bg-[#3b41d1] px-4 py-2 text-white cursor-pointer">
          Add Task
        </button>
      </div>
      </div>

    </div>


  );
}

export default TodoForm
