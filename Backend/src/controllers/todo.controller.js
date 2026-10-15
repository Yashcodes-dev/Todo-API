import { asyncHandler } from "../utils/asyncHandler.js";
import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addTodo = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  if (!title?.trim()) {
    throw new ApiError(400, "Title is required");
  }

  const todo = new Todo({ title, description });
  await todo.save();

  return res
   .status(201)
   .json(
      new ApiResponse(200, todo, "Todo created Successfully")
   )

})

const getTodo = asyncHandler( async(req, res, next) => {
    
})
