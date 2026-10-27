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
   const todos = await Todo.find();

   return res.status(200)
   .json(new ApiResponse(200, todos, "Todo fetched successfully"))
  
})


const updateTodo = asyncHandler( async(req, res , next) => {

  const {id} = req.params;

  const {
    title:updatedTitle,
    description:updatedDescription,
    completed: status
    } = req.body;

    if (updatedTitle === undefined && updatedDescription === undefined && status === undefined){
      throw new ApiError(404, "any one of the filed is required");
    }


  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    {
      $set:{
         ...todo,
         completed: true
      }
    },
    { returnDocument: "after", runValidators: true }
    
  )

  if(!updatedTodo) {
    throw new ApiError(404, "ID doesn't match");
  }

     return res.status(200)
   .json(new ApiResponse(200,updatedTodo,"todo updated successufully"))

})


const deleteTodo = asyncHandler( async(req, res, next) => {

  const {id} = req.params

  const deletedTodo = await Todo.findByIdAndDelete(
    id,
  )

  if(!deletedTodo){
    throw new ApiError(404, "Todo not found")
  } 

    return res.status(200)
   .json(new ApiResponse(200, deletedTodo, "Todo deleted successfully"))

})







export {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
}